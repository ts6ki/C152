AFRAME.registerComponent("move", {
    schema: {
        moveY: { type: "number", default: 1 }
    },

    tick: function () {
        this.data.moveY += 0.01;
        var pos = this.el.getAttribute("position");
        pos.y = this.data.moveY;
        this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
    }
})


AFRAME.registerComponent("zoomout", {
    schema: {
        moveZ: { type: "number", default: 10 }
    },

    tick: function () {
        this.data.moveZ += 0.01;
        var pos = this.el.getAttribute("position");
        pos.z = this.data.moveZ;
        this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
    }
})

AFRAME.registerComponent("fall", {
    schema: {
        moveY: { type: "number", default: 0 }
    },

    tick: function () {
        window.addEventListener("click", () => {
            this.data.moveY -= 0.0001;
        })

        var pos = this.el.getAttribute("position");
        pos.y = pos.y + this.data.moveY;
        this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
    }
})

