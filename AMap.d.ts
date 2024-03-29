export type StatusType = "complete" | 'error' | 'no_data';
export type AnchorType = 'top-left'|'top-center'|'top-right'|'middle-left'|'center'|'middle-right'|'bottom-left'|'bottom-center'|'bottom-right'
export interface AMapMapOptions {
    [key:string]:any
    center:number[]
    zoom:number;
}
export interface AMapMapEventClick {
    lnglat:LngLat;
    pixel:Pixel;
    pos:number[];
    originEvent:{
        lnglat:LngLat;
        pixel:Pixel;
    } & MouseEvent;
    target:any;
    type:"click"
}

export interface AMapMapEventHotspotclick {
    typs:string;
    lnglat:LngLat;
    name:string;
    id:string;
}

export interface AMapMapEventMoving {
    passedPath:Array<LngLat>
    index:number
    passedPos:number[]
    pos:LngLat
    progress:number
    target:any
    type:'moving'
}

export interface AMapMapEventMap {
    "click":AMapMapEventClick
    "dblclick":AMapMapEventClick
    "mousemove":AMapMapEventClick
    "mousewheel":AMapMapEventClick
    "mouseover":AMapMapEventClick
    "mouseout":AMapMapEventClick
    "mouseup":AMapMapEventClick
    "mousedown":AMapMapEventClick
    "rightclick":AMapMapEventClick
    "touchstart":AMapMapEventClick
    "touchend":AMapMapEventClick
    "complete":unknown
    "mapmove":unknown
    "movestart":unknown
    "moveend":unknown
    "moving":AMapMapEventMoving
    "zoomchange":unknown
    "zoomstart":unknown
    "zoomend":unknown
    "dragstart":unknown
    "dragging":unknown
    "dragend":unknown
    "resize":unknown
    "hotspotclick": AMapMapEventHotspotclick
    "hotspotover": AMapMapEventHotspotclick
    "hotspotout": AMapMapEventHotspotclick
}
export class Circle {
    constructor(CircleOptions?:Partial<CircleOptions>) {
    }
}
export interface CircleOptions {
    center:LngLat
    radius:number
    fillColor:number | string
    strokeColor:number | string
    strokeWeight:number
}
export interface Circle {}
export interface PolylineOptions {
    map:AMapMap
    strokeStyle:string
    strokeColor:string
    strokeWeight:number
    strokeOpacity:number
    path:Array<LngLat>
    showDir:boolean
}
export class Polyline {
    constructor(PolylineOptions?:Partial<PolylineOptions>) {
    }
    setPath(path:Array<LngLat>):void
    setAttitude(attitude?:any):void
}
export class Polygon {
    constructor(PolygonOptions?:Partial<PolygonOptions>) {

    }
    setOptions(optArg:Partial<PolygonOptions>):void
    getOptions():PolygonOptions
    hide():void
    show():void
    destroy():void
    getPlaneHeight():number
    getExtData():any
    setExtData(extData:any):void
    getPath():Array<any>
    setPath(path:Array<any>):void
    getBounds():any
    isTerrain(isTerrain:boolean):any
    generateBuffer(gl:any):any

    /**
     * 判断坐标是否在多边形内
     * @param originPoint
     */
    contains(originPoint:LngLat):boolean
}
export interface PolygonOptions {
    [key:string]:any
    map:AMapMap
    path:Array<any>
    zIndex:number
    strokeOpacity:number
    fillOpacity:number
    strokeWeight:number
    height:number
    bubble:boolean
    draggable:boolean
    fillColor:string
    strokeStyle:string
    strokeColor:string
    cursor:string
    strokeDasharray:Array<number>
    extData:object
}
export interface overlayersMap {
    "marker":Marker
    "circle":Circle
    "polyline":Polyline
    "polygon":Polygon
}

export class AMapMap{
    constructor(el:any, opts?:Partial<AMapMapOptions>) {}
    addControl(obj:any){}
    setBounds(Bounds:Bounds){}
    add(overlayers:any[] | any){}
    remove(overlayers:any[] | any){}
    clearMap(){}
    setCenter(position:LngLat, immediately?:boolean, duration?:number):void;
    getAllOverlays<K extends keyof overlayersMap>(type?:K): overlayersMap[K]
    on<K extends keyof AMapMapEventMap>(type:K, callback:(ev:AMapMapEventMap[K])=>any, context?:any){}

    /**
     * setFitView
     * @param markers
     */
    setFitView(markers?: Marker[], immediately?:boolean, avoid?:number[], maxZoom?:number){}

    setZoomAndCenter(zoom:number, center:LngLat){}
    setZoom(zoom:number){}
    getZoom():number{}
    setRotation(rotation:number, immediately?:boolean):number{}
    getRotation():number{}
}

// https://lbs.amap.com/api/javascript-api/reference/overlay#marker
export class Marker {
    constructor(MarkerOptions?:Partial<MarkerOptions>) {
    }
    remove():void
    on<K extends keyof AMapMapEventMap>(type:K, callback:(ev:AMapMapEventMap[K])=>any, context?:any){}
    getContent():any
    getExtData():any
    getPosition():any
    pauseMove():any
    resumeMove():any
    stopMove():any
    moveAlong(path:Array<LngLat>, opts?:Partial<MoveAlongOptions>):any
}

export interface MoveAlongOptions {
    duration:number | AnimationCallback
    speed:number | AnimationCallback
    easing:number
    circlable:boolean
    delay:number
    aniInterval:number | AnimationCallback
    aniInterval:number
    autoRotation:boolean
}

export type AnimationCallback = (index:number, data:LngLat)=>void

export class Size {
    constructor(public width:Number, public height:Number) {
    }
    getWidth():number;
    getHeight():number;
    toString():string;
}



export class Icon {
    constructor(IconOptions?:Partial<IconOptions>) {
    }
    getImageSize():Size
    setImageSize(size:Size):void
}

export interface IconOptions {
    size:Size;
    imageOffset:Pixel;
    image:string;
    imageSize:Size
}

export interface MarkerOptions {
    map:AMapMap;
    position:LngLat
    anchor:string
    offset:Pixel
    icon:Icon | string
    content:object | string
    extData:any
}

export class Pixel {
    constructor(public x:number,public y:number) {
    }
    getX():number
    getY():number
    equals(point:Pixel):boolean
    toString():string
}

export class Scale {
    constructor() {}
}
export class CitySearch {
    getLocalCity(callback:(status:StatusType,result: {
        [key:string]:any;
        adcode:string
        bounds:Bounds
        city:string
        info:'ok'|'OK';
        infocode:string
        province:string
        rectangle:string
        status:string
    })=>void)
}
export class Bounds {
    className:string
    northEast:LngLat;
    southWest:LngLat;
}

export class LngLatClass {
    constructor(...args:number[]) {
    }
    className:string
    KL:number;
    kT:number;
    lat:number;
    lng:number;
    pos:number[];
}

export type LngLat = LngLatClass | number[]

export interface GeolocationOptions {
    enableHighAccuracy:boolean;
    timeout:number;
    noIpLocate:number;
    noGeoLocation:number;
    GeoLocationFirst:boolean;
    maximumAge:number;
    convert:boolean;
    showButton:boolean;
    buttonPosition:string;
    buttonOffset:Pixel;
    showMarker:boolean;
    markerOptions:markerOptions;
    showCircle:boolean;
    circleOptions:CircleOptions;
    panToLocation:boolean;
    zoomToAccuracy:boolean;
    useNative:boolean;
    extensions:string;
}

export class Geolocation {
    constructor(GeolocationOptions?:GeolocationOptions) {}
    getCurrentPosition(callback:(status:StatusType, result:{
        [key:string]:any;
        position:LngLat
        accuracy:number
        location_type:string
        message:string
        isConverted:boolean
        info:string
        addressComponent:AddressComponent
        formattedAddress:string
        pois:any[]
        roads:any[]
        crosses:any[]
    })=>void)
}

export class ContextMenu {
    constructor(ContextMenuOptions?:Partial<ContextMenuOptions>) {
    }
    addItem(text:string, callback:(ev:any)=>void, num:Number)
    removeItem(text:string, callback:(ev:any)=>void)
    open(map:AMapMap,position:LngLat):void
    close():void
}

export interface ContextMenuOptions {
    position:LngLat;
    content:string| HTMLElement
    width:number;
}

export class PlaceSearch {
    constructor(PlaceSearchOptions?:PlaceSearchOptions) {
    }
    search(keyword:string, callback:(status:StatusType, result:{
        cityList:{
            name:string;
            count:number
        }[];
        info:"OK"|'ok'|"TIP_CITIES";
        poiList:{
            count:number;
            pageIndex:number;
            pageSize:number;
            pois:PlaceSearchPoisItem[]
        }
    })=>void):void
}

export interface PlaceSearchPoisItem{
    address:string;
    distance:any;
    id:string;
    location:LngLat;
    name:string;
    shopinfo:string;
    tel:string;
    type:string;
}

export interface PlaceSearchOptions {
    type:string;
    city:string;
    lang:string;
    pageSize:number;
    pageIndex:number;
    extensions:'base' | 'all';
    datatype:string;
    children:number;
    citylimit:boolean;
    map:AMapMap;
    panel:string | HTMLElement;
    showCover:boolean;
    renderStyle:string;
    autoFitView:boolean;
}

export class Autocomplete {
    constructor(AutocompleteOptions?:Partial<AutocompleteOptions>) {
    }
    search(keyword:string, callback:(status:StatusType, result:{
        count:number;
        info:"OK"|'ok';
        tips:AutocompleteSearchTipsItem[]
    })=>void):void
    setType(type:string):void
    setCity(city:string):void
    setCityLimit(isLimit:boolean):void
}

export interface AutocompleteSearchTipsItem {
    adcode:string;
    address:string;
    city:any[];
    district:string;
    id:string;
    location:LngLat;
    name:string;
    typecode:string;
}

export interface AutocompleteOptions {
    type:string;
    city:string;
    datatype:string;
    citylimit:boolean;
    input:string | HTMLElement;
    output:string | HTMLElement;
    outPutDirAuto:boolean;
}

export class InfoWindow {
    dom:HTMLDivElement;
    constructor(InfoWindowOptions?:Partial<InfoWindowOptions>) {
    }
    open(map:AMapMap,position:LngLat):void
    close():void;
    getIsOpen():boolean;
    setContent(content:string|HTMLElement):void;
    getContent():string;
    setPosition(lnglat:LngLat):void;
    getPosition():LngLat;
    getAnchor():AnchorType;
    setAnchor(anchor:AnchorType):void;
    setSize(size:Size):void;
    getSize():Size;
    on<T extends keyof InfoWindowEventMap>(type:T,callback:InfoWindowEventMap[T])
}

interface InfoWindowEventMap {
    change:()=>void
    open:()=>void
    close:()=>void
}

export interface InfoWindowOptions {
    isCustom:boolean;
    autoMove:boolean;
    closeWhenClickMap:boolean;
    content:string|HTMLElement;
    size:Size;
    anchor:AnchorType;
    offset:Pixel;
    position:LngLat;
    showShadow:boolean;
    retainWhenClose:boolean;
}

export interface GeoJSONOptions {
    geoJSON:Record<any, any>
    getMarker(geojson:Record<any, any>, lnglat:Array<Array<LngLat>>):void
    getPolygon(geojson:Record<any, any>, lnglat:Array<Array<LngLat>>):void
    getPolyline(geojson:Record<any, any>, lnglat:Array<Array<LngLat>>):void
}

export class GeoJSON {
    constructor(GeoJSONOptions?:Partial<GeoJSONOptions>) {
    }
}


export class Geocoder{
    constructor(GeocoderOptions?:Partial<GeocoderOptions>) {
    }
    getLocation(address:String, callback:(status:StatusType,result:{
        info:string;
        geocodes:number[];
        resultNum:number;
    })=>void):void
    getAddress(location:LngLat, callback:(status:StatusType,result:{
        info:string;
        geocodes:number[];
        resultNum:number;
    })=>void):void
    setCity(city:string):void
}

export interface GeocoderOptions {
    city:string
    radius:number
    lang:string
    batch:boolean
    extensions:string
}

export class Container {
    constructor(options?:Partial<ContainerOptions>) {
    }
    add(layer:PulseLineLayer):void
    animate:{
        start():void
        stop():void
    }
    viewControl:ContainerViewControl
}

export interface ContainerViewControl {
    addAnimates(configs:ContainerViewControlAnimates, finised?:()=>void)
}

export type ContainerViewControlAnimates = ContainerViewControlAnimatesItem[]

export type ContainerViewControlAnimatesItem<T> = {
    [key:string]:{
        value:any
        control:Array<Array<number | unknown>>
        control:Array<number>
        duration:number
    }
}

export interface ContainerOptions {
    map:AMapMap
}

export class PulseLineLayer {
    constructor(options?:Partial<PulseLineLayerOptions>) {
    }
    setSource(geo:GeoJSONSource):void
    setStyle(style:Partial<PulseLineLayerStyle>):void
}

export interface PulseLineLayerOptions{
    loca:Container
    zIndex:number
    opacity:number
    visible:boolean
    zooms:number[] | number
}

export interface PulseLineLayerStyle {
    altitude:number
    lineWidth:number
    headColor:number | string
    trailColor:number | string
    interval:number
    duration:number
}

export class GeoJSONSource {
    constructor(options?:Partial<{
        data:Partial<GeoJSONSourceData.data>
    }>) {
    }
}

export namespace GeoJSONSourceData {
    type data =
        Partial<FeatureCollection>

    interface FeatureCollection {
        [key:string]:any
        type:'FeatureCollection'
        gid:number
        features:GeoJSONSourceData.features[]
    }

    type features =
        Partial<Feature>

    type Feature =  {
        [key:string]:any
        type:'Feature'
        id:number
        properties:any
        geometry:GeoJSONSourceData.geometry
        bbox:number[]
    }

    type geometry =
        Partial<LineString>

    type LineString = {
        [key:string]:any
        type:"LineString"
        coordinates:number[][]
    }
}

export interface GeoJSONSourceData {
    [key:string]:any
    type:'FeatureCollection'
    features:Partial<features<typeof featuresType[number]>>[]
    gid:number
    id:any
}



export type AMapPluginsMapKeys = `AMap.${keyof AMapInstance}` | keyof AMapInstance;
export type AMapPluginsMapValue = (map:AMapMap, AMapInstance:AMapInstance)=>any
export type AMapPluginsMap =  Partial<{ [key in AMapPluginsMapKeys]:AMapPluginsMapValue }>
export interface AMapInstance{
    Map:typeof AMapMap
    Scale:typeof Scale
    CitySearch:typeof CitySearch
    Bounds:typeof Bounds
    LngLat:typeof LngLat
    Geolocation:typeof Geolocation
    Pixel:typeof Pixel
    Icon:typeof Icon
    Size:typeof Size
    Marker:typeof Marker
    Circle:typeof Circle
    Polyline:typeof Polyline
    Polygon:typeof Polygon
    ContextMenu:typeof ContextMenu
    Autocomplete:typeof Autocomplete
    PlaceSearch:typeof PlaceSearch
    setCenter:typeof setCenter
    InfoWindow:typeof InfoWindow
    Geocoder:typeof Geocoder
    GeoJSON:typeof GeoJSON
}

export interface LocaInstance {
    Container:typeof Container
    GeoJSONSource:typeof GeoJSONSource
    PulseLineLayer:typeof PulseLineLayer
}

declare global {
    export const AMap:AMapInstance;
    export const Loca:LocaInstance;
}