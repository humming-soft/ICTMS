<?php
/**
 * Copyright (c) 2006, Gaudenz Alder
 *
 * Class: mxServer
 *
 * Bootstrapping for the PHP backend. This is version 3.9.12
 * of mxGraph.
 *
 * Variable: MXGRAPH-VERSION
 *
 * Constant that holds the current mxGraph version. The current version
 * is 3.9.12.
 */

define("MXGRAPH-VERSION", "3.9.12");

// Disables external entities in XML
libxml_disable_entity_loader(true);
require_once(dirname(__FILE__).'/util/mxLog.php');
require_once(dirname(__FILE__)."/util/mxLog.php");
require_once(dirname(__FILE__)."/util/mxConstants.php");
require_once(dirname(__FILE__)."/util/mxUtils.php");
require_once(dirname(__FILE__)."/util/mxPoint.php");
require_once(dirname(__FILE__)."/util/mxRectangle.php");
require_once(dirname(__FILE__)."/util/mxEvent.php");
require_once(dirname(__FILE__)."/util/mxEventObject.php");
require_once(dirname(__FILE__)."/util/mxEventSource.php");
require_once(dirname(__FILE__)."/util/mxImageBundle.php");
require_once(dirname(__FILE__)."/model/mxCell.php");
require_once(dirname(__FILE__)."/model/mxCellPath.php");
require_once(dirname(__FILE__)."/model/mxGeometry.php");
require_once(dirname(__FILE__)."/model/mxGraphModel.php");
require_once(dirname(__FILE__)."/canvas/mxGdCanvas.php");
require_once(dirname(__FILE__)."/canvas/mxHtmlCanvas.php");
require_once(dirname(__FILE__)."/reader/mxGraphViewImageReader.php");
require_once(dirname(__FILE__)."/reader/mxGraphViewHtmlReader.php");
require_once(dirname(__FILE__)."/view/mxCellState.php");
require_once(dirname(__FILE__)."/view/mxConnectionConstraint.php");
require_once(dirname(__FILE__)."/view/mxStylesheet.php");
require_once(dirname(__FILE__)."/view/mxPerimeter.php");
require_once(dirname(__FILE__)."/view/mxEdgeStyle.php");
require_once(dirname(__FILE__)."/view/mxStyleRegistry.php");
require_once(dirname(__FILE__)."/view/mxGraphView.php");
require_once(dirname(__FILE__)."/view/mxGraph.php");
require_once(dirname(__FILE__)."/io/mxCodecRegistry.php");
require_once(dirname(__FILE__)."/io/mxCodec.php");
require_once(dirname(__FILE__)."/io/mxObjectCodec.php");
require_once(dirname(__FILE__)."/io/mxCellCodec.php");
require_once(dirname(__FILE__)."/io/mxModelCodec.php");
require_once(dirname(__FILE__)."/io/mxStylesheetCodec.php");

class mxServer{

    protected $xml = '';
    protected $format = '';

    public function __construct($xml='', $format='png'){
        $this->xml = $xml;
        $this->format = $format;
    }

    public function exportToImage($x){
        // Displays a saveAs dialog on the client
        // header('Content-Type: image/png');
        // header('Content-Disposition: attachment; filename="problem_tree.png"');
         mxConstants::$DEFAULT_FONTFAMILY = "C:\WINDOWS\Fonts\arial.ttf";
        //$xml = mxUtils::readFile($x);
        $doc = mxUtils::parseXml($x);

        $model = new mxGraphModel();
        $graph = new mxGraph($model);

        $codec = new mxCodec($doc);
        $codec->decode($doc->documentElement, $graph->getModel());

        $image = $graph->createImage(null, "#FFFFFF");

        // imageInterlace($image, 1);
        // imageColorTransparent($image, imageColorAllocate($image, 255, 255, 255));

        header("Content-Type: image/png");
        // header('Content-Disposition: attachment; filename="problem_tree.png"');
        echo mxUtils::encodeImage($image);


    //     $image = mxGraphViewImageReader::convert($x, "#FFFFFF");
    //     header('Content-Type: image/png');
    //     // header('Content-Disposition: attachment; filename="problem_tree.png"');
    //     echo mxUtils::encodeImage($image);
     }

}
