//Don't change it
requirejs(['ext_editor_io2', 'jquery_190', 'raphael_210'],
    function (extIO, $, rr) {
        function SVG(dom) {
            var colorBlue4 = "#294270";
            var colorBlue1 = "#8FC7ED";
            var paper;
            var sizeX, sizeY;
            var cell = 12;
            var dotR = cell / 3;
            var attrCell = {"stroke": colorBlue4, "fill": colorBlue1, "stroke-width": 1};
            var attrDot = {"stroke-width": 0, "fill": colorBlue4};

            this.draw = function(matrix, orange) {
                sizeX = matrix[0].length * cell + 2 * cell;
                sizeY = matrix.length * cell + 2 * cell;

                paper = Raphael(dom, sizeX, sizeY);

                for (var i = 0; i < matrix.length; i++){
                    for (var j = 0; j < matrix[i].length; j++) {
                        var r = paper.rect(cell + j * cell, cell + i * cell, cell, cell).attr(attrCell);
                        if (matrix[i][j] === 1) {
                            paper.circle(cell * 1.5 + j * cell, cell * 1.6 + i * cell, dotR).attr(attrDot);
                        }
                    }
                }
            }
        }

        var io = new extIO({
            animation: function ($expl, data) {
                var checkioInput = data.in[0];
                if (!checkioInput) return;
                var svg = new SVG($expl[0]);
                svg.draw(data.ext.answer);
            }
        });
        io.start();
    }
);
