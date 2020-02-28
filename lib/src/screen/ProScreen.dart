import 'package:flutter/material.dart';
import 'package:google_places_flutter/google_places_flutter.dart';
import 'package:hostapp/src/style/AppColor.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:hostapp/src/style/AppFontSizes.dart';
import 'package:hostapp/src/viewmodels/ProViewModel.dart';
import 'package:provider_architecture/provider_architecture.dart';
class ProScreen extends StatefulWidget {
  @override
  _ProScreenState createState() => _ProScreenState();
}

class _ProScreenState extends State<ProScreen> {
  TextEditingController controller = new TextEditingController();

  @override
  Widget build(BuildContext context) {
   return ViewModelProvider<ProViewModel>.withConsumer(
      viewModel: ProViewModel(),
      builder: (context, model, child) =>
       Scaffold(
    resizeToAvoidBottomPadding: true,
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
            children: <Widget>[
               horizontalSpaceLarge,
                horizontalSpaceLarge,
               headerButton(),
                Padding(
                     padding: const EdgeInsets.all(8.0),
                     child: Text('Pro Screen', style:  TextStyle(
              color: AppColor.black,
              fontSize: AppFontSizes.largest,
              fontWeight: FontWeight.bold
            )
          ),), 
    
          ],),
      ),
    ),
      );
  }

  headerButton(){
return Row(
          mainAxisAlignment: MainAxisAlignment.start,
         // crossAxisAlignment: Cros,
          children: <Widget>[
            GestureDetector(child: Padding(
        padding: const EdgeInsets.only(left: 6.0, top: 30, bottom: 10),
        child: Container(
          child: Material(
          child: Row(
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.only(left: 5.0),
                  child: Icon(Icons.arrow_back_ios,   color: AppColor.primary,),
                ),
                Center(
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text('Back',
                style: TextStyle(
                  color: AppColor.primary,
                  fontSize: 17.0,
                  fontWeight: FontWeight.bold
                ),),
              )
                )],
          ),
          color: AppColor.primaryLight,
          shape: RoundedRectangleBorder(
borderRadius: new BorderRadius.circular(18.0),
side: BorderSide(color: AppColor.primaryLight)
),
    ),
        ),
      ),
            onTap: (){
               Navigator.pop(context);
            },
            ),   ],
                    );
}
}
