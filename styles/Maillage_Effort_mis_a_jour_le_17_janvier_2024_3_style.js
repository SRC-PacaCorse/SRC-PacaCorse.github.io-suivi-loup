var size = 0;
var placement = 'point';

var style_Maillage_Effort_mis_a_jour_le_17_janvier_2024_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Nb_Indices");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Liberation Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 0.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(8,110,8,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(255,245,240,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.000000 && value <= 5.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(8,110,8,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(238,134,110,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 5.000000 && value <= 8.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(8,110,8,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(211,32,32,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 8.000000 && value <= 100.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(8,110,8,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),fill: new ol.style.Fill({color: 'rgba(103,0,13,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
