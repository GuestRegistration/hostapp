import 'package:flutter/material.dart';
// import 'package:arcore_flutter_plugin/arcore_flutter_plugin.dart';
import 'package:vector_math/vector_math_64.dart' as vector;



class ArPortrait extends StatefulWidget {
  @override
  _ArPortraitState createState() => _ArPortraitState();
}

class _ArPortraitState extends State<ArPortrait> {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    throw UnimplementedError();
  }
  
//   ArCoreController _arCoreController;

// _onArCoreViewCreated(ArCoreController controller){
//   _arCoreController = controller;
//   _addSphere(controller);
    
// }

// _addSphere(ArCoreController arCoreController){
//  final material = ArCoreMaterial(color: Colors.yellow);
//  final sphere = ArCoreSphere(materials: [material], radius: 0.2);
//  final node = ArCoreNode(shape: sphere, position: vector.Vector3(
//    0, 0, -1,
//  ),
//  );

// _arCoreController.addArCoreNode(node);
// }
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: Text('Harbdollar AR'),
//       ),
//       body: ArCoreView(
//         onArCoreViewCreated: _onArCoreViewCreated,
//       ),
//     );
//   }
}