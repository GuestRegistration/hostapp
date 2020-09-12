import 'package:flutter/material.dart';
import 'package:mockito/mockito.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:test/test.dart';

void main() {
  testWidgets('Register Info Test', (WidgetTester tester) async{
      //SETUP
      //RUN
      //VERIFY
     // var result = TextFormField
     Finder firstNameField = find.byKey(Key('firstName'));
    await tester.enterText(firstNameField, 'Ola');

     Finder lastnameField = find.byKey(Key('LastName'));
    await tester.enterText(lastnameField, '2443444');

    Finder countryField = find.byKey(Key('Country'));
    await tester.enterText(countryField, 'Nigeria');

     Finder mobilePhoneField = find.byKey(Key('Mobile Phone'));
    await tester.enterText(mobilePhoneField, '+2348185951999');

await tester.tap(find.byKey(Key('Continue'))); //Tap Contineu button
     
  });
}