import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:hostapp/src/viewmodels/CreateProfileVM.dart';

void main() {
  testWidgets('Register Loader Screen Test', (WidgetTester tester) async{
    BuildContext context;
  
  // Input Data and load. 
    CreateProfileVM().initialize(
    phoneCode: '+234',
    phoneNumber: '081845837131', 
    context:context,
    email: 'horlaz229@gmail.com',
    authuid: 'z7Lor0jy9RTigW6qscFV3JzhLxP2', 
    name: 'Olajire Abdullah', 
    lastname: 'La' );
  });
}