ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2154").setExtent([610160.919282, 6207701.285942, 1395239.080882, 6637322.331191]);
var wms_layers = [];

var lyr_ScanRgionalFXXWM082021_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wxs.ign.fr/cartes/geoportail/r/wms?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "SCANREG_PYR-JPEG_WLD_WM",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Scan Régional FXX WM 08-2021",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ScanRgionalFXXWM082021_0, 0]);
var format_DPT_AURA_PACA_1 = new ol.format.GeoJSON();
var features_DPT_AURA_PACA_1 = format_DPT_AURA_PACA_1.readFeatures(json_DPT_AURA_PACA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_DPT_AURA_PACA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPT_AURA_PACA_1.addFeatures(features_DPT_AURA_PACA_1);
var lyr_DPT_AURA_PACA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DPT_AURA_PACA_1, 
                style: style_DPT_AURA_PACA_1,
                interactive: true,
                title: '<img src="styles/legend/DPT_AURA_PACA_1.png" /> DPT_AURA_PACA'
            });
var format_ZPP_ETE_2023_2 = new ol.format.GeoJSON();
var features_ZPP_ETE_2023_2 = format_ZPP_ETE_2023_2.readFeatures(json_ZPP_ETE_2023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_ZPP_ETE_2023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZPP_ETE_2023_2.addFeatures(features_ZPP_ETE_2023_2);
var lyr_ZPP_ETE_2023_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZPP_ETE_2023_2, 
                style: style_ZPP_ETE_2023_2,
                interactive: true,
    title: 'ZPP_ETE_2023<br />\
    <img src="styles/legend/ZPP_ETE_2023_2_0.png" /> ZPP<br />\
    <img src="styles/legend/ZPP_ETE_2023_2_1.png" /> Secteur à surveiller<br />'
        });
var format_MaillageEffort_3 = new ol.format.GeoJSON();
var features_MaillageEffort_3 = format_MaillageEffort_3.readFeatures(json_MaillageEffort_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_MaillageEffort_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaillageEffort_3.addFeatures(features_MaillageEffort_3);
var lyr_MaillageEffort_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MaillageEffort_3, 
                style: style_MaillageEffort_3,
                interactive: true,
    title: 'Maillage Effort +<br />\
    <img src="styles/legend/MaillageEffort_3_0.png" /> 0<br />\
    <img src="styles/legend/MaillageEffort_3_1.png" /> 1 - 5<br />\
    <img src="styles/legend/MaillageEffort_3_2.png" /> 6 - 8<br />\
    <img src="styles/legend/MaillageEffort_3_3.png" /> >8<br />'
        });
var format_MaillageEffort_4 = new ol.format.GeoJSON();
var features_MaillageEffort_4 = format_MaillageEffort_4.readFeatures(json_MaillageEffort_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_MaillageEffort_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaillageEffort_4.addFeatures(features_MaillageEffort_4);
var lyr_MaillageEffort_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MaillageEffort_4, 
                style: style_MaillageEffort_4,
                interactive: true,
    title: 'Maillage Effort -<br />\
    <img src="styles/legend/MaillageEffort_4_0.png" /> 0<br />\
    <img src="styles/legend/MaillageEffort_4_1.png" /> 1 - 2<br />'
        });

lyr_ScanRgionalFXXWM082021_0.setVisible(true);lyr_DPT_AURA_PACA_1.setVisible(true);lyr_ZPP_ETE_2023_2.setVisible(true);lyr_MaillageEffort_3.setVisible(true);lyr_MaillageEffort_4.setVisible(true);
var layersList = [lyr_ScanRgionalFXXWM082021_0,lyr_DPT_AURA_PACA_1,lyr_ZPP_ETE_2023_2,lyr_MaillageEffort_3,lyr_MaillageEffort_4];
lyr_DPT_AURA_PACA_1.set('fieldAliases', {'code_insee': 'code_insee', 'nom': 'nom', });
lyr_ZPP_ETE_2023_2.set('fieldAliases', {'polygone_2': 'polygone_2', 'Id': 'Id', 'ETE_23': 'ETE_23', });
lyr_MaillageEffort_3.set('fieldAliases', {'CODE_10KM': 'CODE_10KM', 'Nb_Indices': 'Nb_Indices', });
lyr_MaillageEffort_4.set('fieldAliases', {'CODE_10KM': 'CODE_10KM', 'Nb_Indices': 'Nb_Indices', });
lyr_DPT_AURA_PACA_1.set('fieldImages', {'code_insee': 'TextEdit', 'nom': 'TextEdit', });
lyr_ZPP_ETE_2023_2.set('fieldImages', {'polygone_2': 'TextEdit', 'Id': 'Range', 'ETE_23': 'Range', });
lyr_MaillageEffort_3.set('fieldImages', {'CODE_10KM': 'TextEdit', 'Nb_Indices': 'TextEdit', });
lyr_MaillageEffort_4.set('fieldImages', {'CODE_10KM': 'TextEdit', 'Nb_Indices': 'TextEdit', });
lyr_DPT_AURA_PACA_1.set('fieldLabels', {'code_insee': 'no label', 'nom': 'no label', });
lyr_ZPP_ETE_2023_2.set('fieldLabels', {'polygone_2': '', 'Id': 'no label', 'ETE_23': 'no label', });
lyr_MaillageEffort_3.set('fieldLabels', {'CODE_10KM': 'inline label - visible with data', 'Nb_Indices': 'inline label - visible with data', });
lyr_MaillageEffort_4.set('fieldLabels', {'CODE_10KM': 'inline label - visible with data', 'Nb_Indices': 'inline label - visible with data', });
lyr_MaillageEffort_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});