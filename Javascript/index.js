    function dtor(angle){
      //180 deg = PI rad
      let rad = angle * Math.PI / 180;
      return rad
    }
    
    const buffering = document.querySelector('.loader');
    const reader = new FileReader();

    let input_file = document.getElementById('input_file');
    //When Some File is uploaded
    input_file.addEventListener('change',function(e){
    let file = e.target.files[0];
    //Takes Extion From File Name
    let extention = file.name.split('\.').pop();
    //Extention Check
    if (extention == 'obj'){
      reader.readAsDataURL(file);
    }
    else{
      console.log("It's not an 3D object file");
      return;
    }
    //Reader
    reader.addEventListener('load',function(){
        let url = reader.result;
        let directions = ["top","right","bottom","left"];
        for (let i = 0; i < directions.length; i++){
          CreateScene(url,directions[i],5);
        }
      });
    },false);
    
    // URL:Model, Location:Left/Top/Right/Bottom, Scale: 1(x)1(y)1(z) Auto repeat
    function CreateScene(url,location,scale){
      //1radian =
      //PI(Rad) = 180deg
      //Canvas Locations
      let loc;
      let top = new THREE.Vector3(0, dtor(180), 0);
      let right = new THREE.Vector3(dtor(270),dtor(180),dtor(90));
      let bottom = new THREE.Vector3(0, 0, dtor(180));
      let left = new THREE.Vector3(dtor(270),dtor(180),dtor(-90));

      //Object Scale
      const objscale = new THREE.Vector3(scale,scale,scale);

      const width = window.innerWidth;
      const height = window.innerHeight;

      // レンダラーを作成
      // レンダラーを作成
      console.log('before'+top);
      const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#canvas_"+location)
      });
      console.log(objscale.x,objscale.y,objscale.z);
      renderer.setPixelRatio(window.devicePixelRatio);

      switch (location) {
        case "top":
          loc = top;
          break;
        case "right":
          loc = right;
          break;
        case "bottom":
          loc = bottom;
          break;
        case "left":
          loc = left;
          break;
        default:
          console.log("Invalid Location Parameter");
          break;
      }
    
      // シーンを作成
      const scene = new THREE.Scene();
    
      // カメラを作成
      const camera = new THREE.PerspectiveCamera(
        45,
        width / height,
        1,
        10000
      );
      camera.position.set(0, 0, +50);
    
      // 平行光源
      const directionalLight = new THREE.DirectionalLight(
        0xffffff
      );
      directionalLight.position.set(1, 1, 1);
      // シーンに追加
      scene.add(directionalLight);

      //座標
      /*
      var axes = new THREE.AxisHelper(25);
      scene.add(axes);
      */

      const loader = new THREE.OBJLoader();
      loader.load(url,function(object){
        object.scale.set(objscale.x,objscale.y,objscale.z);
        object.rotation.set(loc.x,loc.y,loc.z);
        object.position.set(0, 0, 0); 
        scene.add(object);
      // 初回実行
      renderer.render(scene, camera);
      });
    }