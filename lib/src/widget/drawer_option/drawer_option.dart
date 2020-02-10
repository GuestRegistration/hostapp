import 'package:flutter/material.dart';
import 'package:hostapp/src/datamodels/drawar_item_data.dart';
import 'package:provider/provider.dart';
import 'package:responsive_builder/responsive_builder.dart';

import 'drawer_option_mobile.dart';
import 'drawer_option_tablet.dart';

class DrawerOption extends StatelessWidget {
  final String title;
  final IconData iconData;
  const DrawerOption({
    Key key,
    this.title,
    this.iconData,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    //First check if it's Mobile, Tablet Desktop, Watch.
    return Provider.value(
      value: DrawerItemData(iconData: iconData, title: title),
          child: ResponsiveBuilder(
      builder:  (context, sizingInformation){
         if (sizingInformation.deviceScreenType == DeviceScreenType.Desktop) {
           print('****************Am Desktop ******************');
            return OrientationLayoutBuilder(
          portrait: (context) => DrawerOptionTabletPortrait(),
          landscape: (context) => DrawerOptionMobilePortrait(),

             );
          }

          if (sizingInformation.deviceScreenType == DeviceScreenType.Tablet) {
           print('****************Am Tablet ******************');
            return OrientationLayoutBuilder(
          portrait: (context) => DrawerOptionTabletPortrait(),
          landscape: (context) => DrawerOptionMobilePortrait(),

             );
          }
          if (sizingInformation.deviceScreenType == DeviceScreenType.Mobile) {
           print('****************Am Mobile ******************');
                return OrientationLayoutBuilder(
              portrait: (context) => DrawerOptionMobilePortrait(),
             landscape: (context) => DrawerOptionMobileLandscape(),
                );
          }

          return Container(color:Colors.purple);
      }
      ),
    );
  }
}
