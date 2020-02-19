import 'package:flutter/material.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';

class CollectText extends StatelessWidget {
    final String ttile;

CollectText({this.ttile});

  @override
  Widget build(BuildContext context) {
    return   Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Row(
                    children: <Widget>[
                      
     Text(this.ttile, textAlign: TextAlign.left, style: TextStyle(
                     fontSize: AppFontSizes.medium,
                   ),),
                       Text('*', textAlign: TextAlign.left, style: TextStyle(
                     fontSize: AppFontSizes.medium,
                   ),),
                    ],
                    
                  ),
                );
  }
}