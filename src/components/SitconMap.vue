<template>
  <div>
    <div :style="{ width: width, height: height }"></div>
    <div class="sitetext">中央研究院人文社會科學館</div>
  </div>
</template>

<script>
import 'ol/ol.css'
import Map from 'ol/map'
import Feature from 'ol/feature'
import Point from 'ol/geom/point'
import Style from 'ol/style/style'
import Icon from 'ol/style/icon'
import LayerVector from 'ol/layer/vector'
import SourceVector from 'ol/source/vector'
import Interaction from 'ol/interaction'
import Tile from 'ol/layer/tile'
import OSM from 'ol/source/osm'
import View from 'ol/view'
import Proj from 'ol/proj'
export default {
  name: 'SitconMap',
  props: {
    width: {
      type: String,
      default: 320 + 'px'
    },
    height: {
      type: String,
      default: 240 + 'px'
    }
  },
  data () {
    return {
      osmMap: null
    }
  },
  methods: {
    mapMarkerLayer (name, imgSrc, pos) {
      var icon = new Feature({
        name: name,
        geometry: new Point(Proj.fromLonLat(pos))
      })
      var iconStyle = new Style({
        image: new Icon({
          scale: 0.5,
          anchor: [0.5, 1],
          anchorXUnits: 'fraction',
          anchorYUnits: 'fraction',
          src: imgSrc
        })
      })
      icon.setStyle(iconStyle)
      return new LayerVector({
        source: new SourceVector({ features: [icon] }),
        style: iconStyle
      })
    },
    makeMap () {
      var iconMain = this.mapMarkerLayer('main', './static/img/sitcon-logo.png', [121.6116, 25.0410])
      var osmMap = new Map({
        target: this.$el.firstChild,
        interactions: Interaction.defaults({mouseWheelZoom: false}),
        layers: [
          new Tile({
            source: new OSM(),
            opacity: 0.6
          }),
          iconMain
        ],
        view: new View({
          center: Proj.fromLonLat([121.6116, 25.0410]),
          zoom: 16
        })
      })
      return osmMap
    }
  },
  mounted () {
    this.osmMap = this.makeMap()
  }
}
</script>

<style lang="sass" scoped>
div
  position: relative
  .sitetext
    text-align: center
    position: absolute
    bottom: 20%
    border: 1px solid black
    left: 50%
    transform: translate(-50%);
    color: black
    padding: 15px
    font-size: 18px
    background-color: rgba(255, 255, 255, 0.7)

</style>
