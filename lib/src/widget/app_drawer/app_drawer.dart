import 'package:flutter/material.dart';
import 'package:hostapp/src/widget/app_drawer/app_drawer_mobile.dart';
import 'package:hostapp/src/widget/app_drawer/app_drawer_tablet.dart';
import 'package:hostapp/src/widget/drawer_option/drawer_option.dart';
import 'package:icofont_flutter/icofont_flutter.dart';
import 'package:responsive_builder/responsive_builder.dart';

class AppDrawer extends StatelessWidget {
  const AppDrawer({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
     //First check if it's Mobile, Tablet Desktop, Watch.
    return ResponsiveBuilder(
    builder:  (context, sizingInformation){
       if (sizingInformation.deviceScreenType == DeviceScreenType.Desktop) {
         return OrientationLayoutBuilder(
        portrait: (context) => Container(color: Colors.green),
        landscape: (context) => Container(color: Colors.pink),
           );
        }

        if (sizingInformation.deviceScreenType == DeviceScreenType.Tablet) {
         return OrientationLayoutBuilder(
        portrait: (context) => AppDrawerTabletPortrait(),
        landscape: (context) => AppDrawerTabletLandscape(),
           );
        }

        if (sizingInformation.deviceScreenType == DeviceScreenType.Watch) {
          print('Am Watch');
           return OrientationLayoutBuilder(
        portrait: (context) => Container(color: Colors.red),
        landscape: (context) => Container(color: Colors.red[200]),
           );
           
        }

        if (sizingInformation.deviceScreenType == DeviceScreenType.Mobile) {
          print('Am Mobile');
              return AppDrawerMobile();
        }

        return Container(color:Colors.purple);
    }
    );
  }


  static List<Widget> getDrawerOptions() {
    return [
      DrawerOption(
        title: 'Home',
        iconData: Icons.home,
      ),
      DrawerOption(
        title: 'Add Property',
        iconData: IcoFontIcons.addons,
      ),
      DrawerOption(
        title: 'Properties',
        iconData: IcoFontIcons.searchProperty,
      ),
      DrawerOption(
        title: 'Profile',
        iconData: IcoFontIcons.userAlt5,
      ),
    ];
  }
}
