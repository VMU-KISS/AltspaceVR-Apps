var Planets = {}


Planets.createSun = function(){
	var geometry = new THREE.SphereGeometry(0.5, 32, 32)
	texture = THREE.ImageUtils.loadTexture('images/sunmap.jpg');
	var material = new THREE.MeshBasicMaterial({color:'#ffffff', map: texture});
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}

Planets.createMercury = function(){
	var geometry = new THREE.SphereGeometry(0.5, 32, 32)
	texture = THREE.ImageUtils.loadTexture('images/mercurymap.jpg');
	var material = new THREE.MeshBasicMaterial({color:'#ffffff', map: texture});
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}

Planets.createVenus = function(){
	var geometry = new THREE.SphereGeometry(0.5, 32, 32)
	texture = THREE.ImageUtils.loadTexture('images/venusmap.jpg');
	var material = new THREE.MeshBasicMaterial({color:'#ffffff', map: texture});
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}

Planets.createEarth = function(){
	var geometry = new THREE.SphereGeometry(0.5, 32, 32)
	texture = THREE.ImageUtils.loadTexture('images/earthmap1k.jpg');
	var material = new THREE.MeshBasicMaterial({color:'#ffffff', map: texture});
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}

Planets.createMoon = function(){
	var geometry = new THREE.SphereGeometry(0.5, 32, 32)
	texture = THREE.ImageUtils.loadTexture('images/moonmap1k.jpg');
	var material = new THREE.MeshBasicMaterial({color:'#ffffff', map: texture});
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}

Planets.createMars = function(){
	var geometry = new THREE.SphereGeometry(0.5, 32, 32)
	texture = THREE.ImageUtils.loadTexture('images/marsmap1k.jpg');
	var material = new THREE.MeshBasicMaterial({color:'#ffffff', map: texture});
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}

Planets.createJupiter = function(){
	var geometry = new THREE.SphereGeometry(0.5, 32, 32)
	texture = THREE.ImageUtils.loadTexture('images/jupitermap.jpg');
	var material = new THREE.MeshBasicMaterial({color:'#ffffff', map: texture});
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}

Planets.createSaturn = function(){
	var geometry = new THREE.SphereGeometry(0.5, 32, 32)
	texture = THREE.ImageUtils.loadTexture('images/saturnmap.jpg');
	texture1 = THREE.ImageUtils.loadTexture('images/saturnring.png');	
	var material = new THREE.MeshBasicMaterial({color:'#ffffff', map: texture});
	var sat	= new THREE.Mesh(geometry, material)
	var geometry = new THREE.PlaneGeometry(2, 2);
	var material = new THREE.MeshBasicMaterial({color:'#ffffff', map: texture1, side: THREE.DoubleSide, transparent: true});
	var ring = new THREE.Mesh(geometry, material);
	ring.rotation.x = 90 * (Math.PI / 180);
	mesh = new THREE.Object3D();
	mesh.add( sat );
	mesh.add( ring );
	return mesh	
}

Planets.createUranus = function(){
	var geometry = new THREE.SphereGeometry(0.5, 32, 32)
	texture = THREE.ImageUtils.loadTexture('images/uranusmap.jpg');
	texture1 = THREE.ImageUtils.loadTexture('images/uranusring.png');	
	var material = new THREE.MeshBasicMaterial({color:'#ffffff', map: texture});
	var sat	= new THREE.Mesh(geometry, material)
	var geometry = new THREE.PlaneGeometry(2, 2);
	var material = new THREE.MeshBasicMaterial({color:'#ffffff', map: texture1, side: THREE.DoubleSide, transparent: true});
	var ring = new THREE.Mesh(geometry, material);
	ring.rotation.x = 90 * (Math.PI / 180);
	mesh = new THREE.Object3D();
	mesh.add( sat );
	mesh.add( ring );
	return mesh	
}

Planets.createNeptune = function(){
	var geometry = new THREE.SphereGeometry(0.5, 32, 32)
	texture = THREE.ImageUtils.loadTexture('images/neptunemap.jpg');
	var material = new THREE.MeshBasicMaterial({color:'#ffffff', map: texture});
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}

Planets.createPluto = function(){
	var geometry = new THREE.SphereGeometry(0.5, 32, 32)
	texture = THREE.ImageUtils.loadTexture('images/plutomap1k.jpg');
	var material = new THREE.MeshBasicMaterial({color:'#ffffff', map: texture});
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}

Planets.createMakemake = function(){
	var geometry = new THREE.SphereGeometry(0.5, 32, 32)
	texture = THREE.ImageUtils.loadTexture('images/makemake.jpg');
	var material = new THREE.MeshBasicMaterial({color:'#ffffff', map: texture});
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}

Planets.createHaumea = function(){
	var geometry = new THREE.SphereGeometry(0.5, 32, 32)
	geometry.applyMatrix( new THREE.Matrix4().makeScale( 1.0, 1.3, 1.5 ) );
	texture = THREE.ImageUtils.loadTexture('images/haumea.jpg');
	var material = new THREE.MeshBasicMaterial({color:'#ffffff', map: texture});
	var mesh	= new THREE.Mesh(geometry, material)
	mesh.rotation.x = 42 * (Math.PI / 180);
	mesh.rotation.z = 50 * (Math.PI / 180);
	return mesh	
}

Planets.createEris = function(){
	var geometry = new THREE.SphereGeometry(0.5, 32, 32)
	texture = THREE.ImageUtils.loadTexture('images/eris.jpg');
	var material = new THREE.MeshBasicMaterial({color:'#ffffff', map: texture});
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}

Planets.createCeres = function(){
	var geometry = new THREE.SphereGeometry(0.5, 32, 32)
	texture = THREE.ImageUtils.loadTexture('images/ceres.jpg');
	var material = new THREE.MeshBasicMaterial({color:'#ffffff', map: texture});
	var mesh	= new THREE.Mesh(geometry, material)
	return mesh	
}