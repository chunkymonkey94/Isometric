function firstMap() {
	var mapIndex = 0;
	for (var y=0; y<10; y++) {
		for (var x=10; x>0; x--, mapIndex++) {
		
			tileHeight = HeightMap[mapIndex];
			/*if (tileHeight == 0){
				dir_h = 0.3;
			}
			else if (tileHeight == 1) {
				dir_h = 0.9;
			}*/
			if (tileHeight == 2) {
				dir_h = -0.3;
			
		
				var tile_x = (BLOCK_W/2) * (x + y) - 32;
				var tile_y = (BLOCK_H/2) * ((y*0.5) - (x/2) - dir_h) + 320;
				
				tileType = map[mapIndex];
							
				if (tileType == 0) {
					dirt.draw(tile_x, tile_y);
				}
				else if (tileType == 1) {
					grass.draw(tile_x, tile_y);
				}
			}
		}
	}};

function secondMap() {
	var mapIndex = 0;
	for (var y=0; y<10; y++) {
		for (var x=10; x>0; x--, mapIndex++) {
		
			tileHeight = HeightMap[mapIndex];
			/*if (tileHeight == 0){
				dir_h = 0.3;
			}
			else if (tileHeight == 1) {
				dir_h = 0.9;
			}*/
			if (tileHeight == 0) {
				dir_h = 0.7;
			
		
				var tile_x = (BLOCK_W/2) * (x + y) - 32;
				var tile_y = (BLOCK_H/2) * ((y*0.5) - (x/2) - dir_h) + 320;
				
				tileType = map[mapIndex];
							
				if (tileType == 0) {
					dirt.draw(tile_x, tile_y);
				}
				else if (tileType == 1) {
					grass.draw(tile_x, tile_y);
				}
			}
		}
	}};
	
function thirdMap() {
	var mapIndex = 0;
	for (var y=0; y<10; y++) {
		for (var x=10; x>0; x--, mapIndex++) {
		
			tileHeight = HeightMap[mapIndex];
			/*if (tileHeight == 0){
				dir_h = 0.3;
			}
			else if (tileHeight == 1) {
				dir_h = 0.9;
			}*/
			if (tileHeight == 1) {
				dir_h = 1.7;
			
		
				var tile_x = (BLOCK_W/2) * (x + y) - 32;
				var tile_y = (BLOCK_H/2) * ((y*0.5) - (x/2) - dir_h) + 320;
				
				tileType = map[mapIndex];
							
				if (tileType == 0) {
					dirt.draw(tile_x, tile_y);
				}
				else if (tileType == 1) {
					grass.draw(tile_x, tile_y);
				}
			}
		}
	}};