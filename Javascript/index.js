    
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
        init_left(url);
        init_right(url);
        init_up(url);
        init_down(url);
      });
    },false);
    //Initializing Left Scene
    function init_left(url) {
        const width = 200;
        const height = 200;
      
        // レンダラーを作成
        // レンダラーを作成
        const renderer = new THREE.WebGLRenderer({
          canvas: document.querySelector("#canvas_left")
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
      
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

        const loader = new THREE.OBJLoader();
        loader.load(url,function(object){
        object.scale.set(5,5,5);
        object.rotation.set(0, -Math.PI/2, 0);
        object.position.set(0, 0, 0); 
        scene.add(object);
        // 初回実行
        renderer.render(scene, camera);
        });
    }
    //Initializing Right Scene
    function init_right(url) {
      const width = 200;
      const height = 200;
    
      // レンダラーを作成
      // レンダラーを作成
      const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#canvas_right")
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
    
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

      const loader = new THREE.OBJLoader();
      loader.load(url,function(object){
        object.scale.set(5,5,5);
        object.rotation.set(0, Math.PI/2, 0);
        object.position.set(0, 0, 0); 
        scene.add(object);
      // 初回実行
      renderer.render(scene, camera);
      });
    }

    function init_up(url) {
      const width = 200;
      const height = 200;
    
      // レンダラーを作成
      // レンダラーを作成
      const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#canvas_top")
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
    
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

      const loader = new THREE.OBJLoader();
      loader.load(url,function(object){
        object.scale.set(5,5,5);
        object.rotation.set(0, Math.PI, 0);
        object.position.set(0, 0, 0); 
        scene.add(object);
      // 初回実行
      renderer.render(scene, camera);
      });
    }

    function init_down(url) {
      const width = 200;
      const height = 200;
    
      // レンダラーを作成
      // レンダラーを作成
      const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#canvas_bottom")
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
    
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

      const loader = new THREE.OBJLoader();
      loader.load(url,function(object){
        object.scale.set(5,5,5);
        object.rotation.set(0, 0, 0);
        object.position.set(0, 0, 0); 
        scene.add(object);
      // 初回実行
      renderer.render(scene, camera);
      });
    }
