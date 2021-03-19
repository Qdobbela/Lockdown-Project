var items = [],
    point = document.querySelector('svg').createSVGPoint();

function getCoordinates(e, svg) {
    point.x = e.clientX;
    point.y = e.clientY;
    return point.matrixTransform(svg.getScreenCTM().inverse());
}

function changeColor(e) {
    document.body.className = e.currentTarget.className;
}


function Item(config) {
    Object.keys(config).forEach(function (item) {
        this[item] = config[item];
    }, this);
    this.el.addEventListener('mousemove', this.mouseMoveHandler.bind(this));
    this.el.addEventListener('touchmove', this.touchMoveHandler.bind(this));
}

Item.prototype = {
    update: function update(c) {
        this.clip.setAttribute('cx', c.x);
        this.clip.setAttribute('cy', c.y);
        console.log("hover")
    },
    mouseMoveHandler: function mouseMoveHandler(e) {
        this.update(getCoordinates(e, this.svg));

    },
    touchMoveHandler: function touchMoveHandler(e) {
        e.preventDefault();
        var touch = e.targetTouches[0];

        if (touch) return this.update(getCoordinates(touch, this.svg));
    }
};

[].slice.call(document.querySelectorAll('.item'), 0).forEach(function (item, index) {
    items.push(new Item({
        el: item,
        svg: item.querySelector('svg'),
        clip: document.querySelector('#clip-' + index + ' circle'),
    }));
});

[].slice.call(document.querySelectorAll('button'), 0).forEach(function (button) {
    button.addEventListener('click', changeColor);
});


var count = 0;
var correct = 0;
var a, b, c = 1;

var i = 1;

function fadeOut() {
    setTimeout(function () {
        if (1) {
            document.getElementsByClassName('item')[i].style.transform = "scale(0)";
        }
        i++;
        if (i < items.length) {
            fadeOut();
        }
        if (i == items.length) {
            var x = document.getElementById("titel1");
            var y = document.getElementById("titel2");
            var z = document.getElementById("titel3");
            x.style.display = "none";
            y.style.display = "inline";
            setTimeout(doSomething, 2000);

            function doSomething() {
                y.style.display = "none";
                z.style.display = "inline";
            }
        }
    }, 90)
}

function check(a) {
    console.log(a);
    count++;
    if (a) {
        correct += 1;
    }
    console.log(count);
    if (count == 4) {
        if (count == 4 && correct == 4) {
            document.body.style.backgroundColor = "#0e580e"
            sessionStorage.setItem('pcCEO', 1);
            sessionStorage.setItem('ceoSlot2', true);
            history.back();
        } else {
            document.body.style.backgroundColor = "#580e0e";
            setTimeout(function () {
                location.reload();
            }, 300);
        }

    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
//////////set check(1) for correct object1
///////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementsByClassName('item')[0]
    .addEventListener('click', function () {
        document.getElementById('img1').style.transform = "scale(0.5)";
        check(0);
    }, {
        once: true
    });


document.getElementsByClassName('item')[1]
    .addEventListener('click', function () {
        document.getElementById('img2').style.transform = "scale(0.5)";
        check(0);
    }, {
        once: true
    });

document.getElementsByClassName('item')[2]
    .addEventListener('click', function () {
        document.getElementById('img3').style.transform = "scale(0.5)";
        check(0);
    }, {
        once: true
    });

document.getElementsByClassName('item')[3]
    .addEventListener('click', function () {
        document.getElementById('img4').style.transform = "scale(0.5)";
        check(1)
    }, {
        once: true
    });

document.getElementsByClassName('item')[4]
    .addEventListener('click', function () {
        document.getElementById('img5').style.transform = "scale(0.5)";
        check(0)
    }, {
        once: true
    });

document.getElementsByClassName('item')[5]
    .addEventListener('click', function () {
        document.getElementById('img6').style.transform = "scale(0.5)";
        check(1)
    }, {
        once: true
    });

document.getElementsByClassName('item')[6]
    .addEventListener('click', function () {
        document.getElementById('img7').style.transform = "scale(0.5)";
        check(0)
    }, {
        once: true
    });

document.getElementsByClassName('item')[7]
    .addEventListener('click', function () {
        document.getElementById('img8').style.transform = "scale(0.5)";
        check(1)
    }, {
        once: true
    });

document.getElementsByClassName('item')[8]
    .addEventListener('click', function () {
        document.getElementById('img9').style.transform = "scale(0.5)";
        check(0)
    }, {
        once: true
    });

document.getElementsByClassName('item')[9]
    .addEventListener('click', function () {
        document.getElementById('img10').style.transform = "scale(0.5)";
        check(0)
    }, {
        once: true
    });

document.getElementsByClassName('item')[10]
    .addEventListener('click', function () {
        document.getElementById('img11').style.transform = "scale(0.5)";
        check(1)
    }, {
        once: true
    });