
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('Register Loader Screen Test', (WidgetTester tester) async{
    BuildContext context; //

    Finder firstNameField = find.byKey(Key('Property Address'));
    await tester.enterText(firstNameField, 'NO 30, Oluware Ibadan.');

     Finder propertyAddressField = find.byKey(Key(' Address'));
    await tester.enterText(propertyAddressField, 'NO 30,Property Oluware Ibadan.');

     Finder contactPhone = find.byKey(Key('Contact Phone'));
    await tester.enterText(contactPhone, '+2348185942452');

     Finder rulesfield = find.byKey(Key('Property rules'));
    await tester.enterText(rulesfield, 'No rules.');

     Finder documentfield = find.byKey(Key('Property document'));
    await tester.enterText(documentfield, 'https://document.doc');

    Finder countryfield = find.byKey(Key('Property Country'));
    await tester.enterText(countryfield, 'Nigeria');

    await tester.tap(find.byKey(Key('Continue'))); //Tap Contineu button
  });
}