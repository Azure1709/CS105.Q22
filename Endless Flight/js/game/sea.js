Sea = function () {
    var geom = new THREE.CylinderGeometry(game.seaRadius, game.seaRadius, game.seaLength, 40, 10);
    geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
    geom.mergeVertices();
    var l = geom.vertices.length;

    this.waves = [];

    for (var i = 0; i < l; i++) {
        var v = geom.vertices[i];
        //v.y = Math.random()*30;
        this.waves.push({
            y: v.y,
            x: v.x,
            z: v.z,
            ang: Math.random() * Math.PI * 2,
            amp: game.wavesMinAmp + Math.random() * (game.wavesMaxAmp - game.wavesMinAmp),
            speed: game.wavesMinSpeed + Math.random() * (game.wavesMaxSpeed - game.wavesMinSpeed)
        });
    };
    
    // Load texture
    var textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = 'anonymous';
    this.currentTexture = 'sea.jpg';
    this.texture = textureLoader.load(
        'images/sea.jpg',
        function(loadedTexture) {
            console.log('Texture loaded successfully');
        },
        undefined,
        function(error) {
            console.error('Error loading texture:', error);
        }
    );
    this.texture.wrapS = THREE.RepeatWrapping;
    this.texture.wrapT = THREE.RepeatWrapping;
    this.texture.repeat.set(10, 4);
    this.texture.generateMipmaps = false;
    this.texture.magFilter = THREE.LinearFilter;
    this.texture.minFilter = THREE.LinearFilter;
    
    var mat = new THREE.MeshPhongMaterial({
        map: this.texture,
        color: 0xffffff,
        emissive: 0x333333,
        shininess: 30,
        shading: THREE.FlatShading,

    });

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.name = "waves";
    this.mesh.receiveShadow = true;
    this.material = mat;

}

Sea.prototype.moveWaves = function () {
    var verts = this.mesh.geometry.vertices;
    var l = verts.length;
    for (var i = 0; i < l; i++) {
        var v = verts[i];
        var vprops = this.waves[i];
        v.x = vprops.x + Math.cos(vprops.ang) * vprops.amp;
        v.y = vprops.y + Math.sin(vprops.ang) * vprops.amp;
        vprops.ang += vprops.speed * deltaTime;
        this.mesh.geometry.verticesNeedUpdate = true;
    }
}

Sea.prototype.switchTexture = function () {
    var textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = 'anonymous';
    
    var newTexture;
    var newTextureName;
    
    if (this.currentTexture === 'sea.jpg') {
        newTexture = textureLoader.load('images/grass.jpg');
        newTextureName = 'grass.jpg';
    } else {
        newTexture = textureLoader.load('images/sea.jpg');
        newTextureName = 'sea.jpg';
    }
    
    newTexture.wrapS = THREE.RepeatWrapping;
    newTexture.wrapT = THREE.RepeatWrapping;
    newTexture.repeat.set(10, 4);
    newTexture.generateMipmaps = false;
    newTexture.magFilter = THREE.LinearFilter;
    newTexture.minFilter = THREE.LinearFilter;
    
    this.material.map = newTexture;
    this.material.needsUpdate = true;
    this.currentTexture = newTextureName;
    
    console.log('Texture switched to: ' + newTextureName);
}
