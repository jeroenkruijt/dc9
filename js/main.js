var logo;

var cursors;

function preload(){
    this.load.image("logo", "assets/img.png");
}

function create(){
   logo = this.add.image(400, 300, "logo");

   cursors = this.input.keyboard.createCursorKeys();
}

function update(){
    if(cursors.right.isDown){
        logo.x += 5;
    }
    if(cursors.left.isDown){
        logo.x -= 5;
    }
    if(cursors.up.isDown){
        logo.y--;
    }
    if(cursors.down.isDown){
        logo.y++;
    }
    if(logo.x > 800){
        logo.x = 0;
    }
}

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);