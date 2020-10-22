class Roof{
    constructor(x, y, width, height) {
        var properties = {
            isStatic: true, 
            
        }
        this.body = Bodies.rectangle(x, y, width, height, properties);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(180)
        var roof = createSprite(pos.x, pos.y, this.width, this.height);
       
    }
}