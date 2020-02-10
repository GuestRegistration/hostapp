import 'package:flutter/material.dart';
import 'package:hostapp/src/screen/Mobile/LoginView_Mobile.dart';
import 'package:hostapp/src/style/AppImage.dart';
import 'package:hostapp/src/viewmodels/LoginViewModel.dart';
import 'package:hostapp/src/widget/busy_button.dart';
import 'package:hostapp/src/widget/input_field.dart';
import 'package:hostapp/src/widget/text_link.dart';
import 'package:hostapp/src/widget/ui_helpers.dart';
import 'package:provider_architecture/provider_architecture.dart';
import 'package:responsive_builder/responsive_builder.dart';

class LoginView extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return ViewModelProvider<LoginViewModel>.withoutConsumer(
      viewModel: LoginViewModel(),
      builder: (context, model, child) => 
      ScreenTypeLayout(
  mobile: OrientationLayoutBuilder(
                  landscape: (context) => LoginViewLandscape(),
                 portrait: (context) =>  LoginViewPortrait()//Use Lanscape for now till you find soltuion
              
                ),
  tablet: Container(color: Colors.yellow),
)
      );
  }
}

class LoginUI extends StatelessWidget {
    final emailController = TextEditingController();
  final passwordController = TextEditingController();
  final LoginViewModel model;

   LoginUI(this.model);

  @override
  Widget build(BuildContext context) {
    return  Padding(
            padding: const EdgeInsets.symmetric(horizontal: 50),
            child: Column(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                SizedBox(
                  height: 150,
                  child: Image.asset(AppImage.icode),
                ),
                InputField(
                  placeholder: 'Email',
                  controller: emailController,
                ),
                verticalSpaceSmall,
                InputField(
                  placeholder: 'Password',
                  password: true,
                  controller: passwordController,
                ),
                verticalSpaceMedium,
                Row(
                  mainAxisSize: MainAxisSize.max,
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    BusyButton(
                      title: 'Login',
                      busy: model.busy,
                      onPressed: () {
                        // TODO: Perform firebase login here
                        model.login(
                          email: emailController.text,
                          password: passwordController.text,
                        );
                      },
                    )
                  ],
                ),
                verticalSpaceMedium,
                TextLink(
                  'Create an Account if you\'re new.',
                  onPressed: () {
                    // TODO: Handle navigation
                    model.navigateToSignUp();
                  },
                )
              ],
            ),
          );
  }
}
