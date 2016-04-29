Laya.init(550, 400);
Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
Laya.stage.bgColor = "#ffeecc";

var rect = new Laya.Sprite();
rect.graphics.drawRect(0, 0, 100, 100, "#00eeff");
rect.pos(200, 80);
rect.size(100, 100);

rect.on(Laya.Event.MOUSE_DOWN, this, onMouseDown);

Laya.stage.addChild(rect);
	
function onMouseDown(e) 
{
	rect.startDrag();
}