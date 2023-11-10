var wms_layers = [];


        var lyr_MapabasedeterrenoGoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Mapa base de terreno (Google Satellite)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_MapabasedeviasGoogleRoad_1 = new ol.layer.Tile({
            'title': 'Mapa base de vias (Google Road)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_GrandesRegies_2 = new ol.format.GeoJSON();
var features_GrandesRegies_2 = format_GrandesRegies_2.readFeatures(json_GrandesRegies_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GrandesRegies_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrandesRegies_2.addFeatures(features_GrandesRegies_2);
var lyr_GrandesRegies_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GrandesRegies_2, 
                style: style_GrandesRegies_2,
                interactive: true,
    title: 'Grandes Regiões<br />\
    <img src="styles/legend/GrandesRegies_2_0.png" /> Centro-Oeste<br />\
    <img src="styles/legend/GrandesRegies_2_1.png" /> Nordeste<br />\
    <img src="styles/legend/GrandesRegies_2_2.png" /> Norte<br />\
    <img src="styles/legend/GrandesRegies_2_3.png" /> Sudeste<br />\
    <img src="styles/legend/GrandesRegies_2_4.png" /> Sul<br />'
        });
var format_UnidadesdescentralizadasdereciclagemUDR_3 = new ol.format.GeoJSON();
var features_UnidadesdescentralizadasdereciclagemUDR_3 = format_UnidadesdescentralizadasdereciclagemUDR_3.readFeatures(json_UnidadesdescentralizadasdereciclagemUDR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnidadesdescentralizadasdereciclagemUDR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdescentralizadasdereciclagemUDR_3.addFeatures(features_UnidadesdescentralizadasdereciclagemUDR_3);cluster_UnidadesdescentralizadasdereciclagemUDR_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_UnidadesdescentralizadasdereciclagemUDR_3
});
var lyr_UnidadesdescentralizadasdereciclagemUDR_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_UnidadesdescentralizadasdereciclagemUDR_3, 
                style: style_UnidadesdescentralizadasdereciclagemUDR_3,
                interactive: true,
                title: '<img src="styles/legend/UnidadesdescentralizadasdereciclagemUDR_3.png" /> Unidades descentralizadas de reciclagem (UDR)'
            });
var format_CentraisderegeneraoearmazenamentoCRA_4 = new ol.format.GeoJSON();
var features_CentraisderegeneraoearmazenamentoCRA_4 = format_CentraisderegeneraoearmazenamentoCRA_4.readFeatures(json_CentraisderegeneraoearmazenamentoCRA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentraisderegeneraoearmazenamentoCRA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentraisderegeneraoearmazenamentoCRA_4.addFeatures(features_CentraisderegeneraoearmazenamentoCRA_4);cluster_CentraisderegeneraoearmazenamentoCRA_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_CentraisderegeneraoearmazenamentoCRA_4
});
var lyr_CentraisderegeneraoearmazenamentoCRA_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_CentraisderegeneraoearmazenamentoCRA_4, 
                style: style_CentraisderegeneraoearmazenamentoCRA_4,
                interactive: true,
                title: '<img src="styles/legend/CentraisderegeneraoearmazenamentoCRA_4.png" /> Centrais de regeneração e armazenamento (CRA)'
            });

lyr_MapabasedeterrenoGoogleSatellite_0.setVisible(true);lyr_MapabasedeviasGoogleRoad_1.setVisible(true);lyr_GrandesRegies_2.setVisible(true);lyr_UnidadesdescentralizadasdereciclagemUDR_3.setVisible(true);lyr_CentraisderegeneraoearmazenamentoCRA_4.setVisible(true);
var layersList = [lyr_MapabasedeterrenoGoogleSatellite_0,lyr_MapabasedeviasGoogleRoad_1,lyr_GrandesRegies_2,lyr_UnidadesdescentralizadasdereciclagemUDR_3,lyr_CentraisderegeneraoearmazenamentoCRA_4];
lyr_GrandesRegies_2.set('fieldAliases', {'ID': 'ID', 'NOME1': 'NOME1', 'NOME2': 'NOME2', 'SIGLA': 'SIGLA', });
lyr_UnidadesdescentralizadasdereciclagemUDR_3.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'end': 'end', 'lat': 'lat', 'lon': 'lon', 'TIPO': 'TIPO', });
lyr_CentraisderegeneraoearmazenamentoCRA_4.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'end': 'end', 'lat': 'lat', 'lon': 'lon', 'TIPO': 'TIPO', });
lyr_GrandesRegies_2.set('fieldImages', {'ID': 'Range', 'NOME1': 'TextEdit', 'NOME2': 'TextEdit', 'SIGLA': 'TextEdit', });
lyr_UnidadesdescentralizadasdereciclagemUDR_3.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'end': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_CentraisderegeneraoearmazenamentoCRA_4.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'end': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_GrandesRegies_2.set('fieldLabels', {'ID': 'no label', 'NOME1': 'no label', 'NOME2': 'no label', 'SIGLA': 'no label', });
lyr_UnidadesdescentralizadasdereciclagemUDR_3.set('fieldLabels', {'id': 'no label', 'nome': 'header label', 'end': 'inline label', 'lat': 'inline label', 'lon': 'inline label', 'TIPO': 'inline label', });
lyr_CentraisderegeneraoearmazenamentoCRA_4.set('fieldLabels', {'id': 'no label', 'nome': 'header label', 'end': 'inline label', 'lat': 'inline label', 'lon': 'inline label', 'TIPO': 'inline label', });
lyr_CentraisderegeneraoearmazenamentoCRA_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});