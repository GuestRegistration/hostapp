
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:hostapp/src/screen/ListOfProperty.dart';
import 'package:hostapp/src/screen/mainReservationScreen.dart';

void main() {
testWidgets('Add a Reservation', (WidgetTester tester) async{
      //SETUP
      //RUN
      //VERIFY
     // var result = TextFormField
     Finder propertyField = find.byKey(Key('Property'));
    await tester.enterText(propertyField, 'Jodan, catolip');

     Finder guestField = find.byKey(Key('Guest'));
    await tester.enterText(guestField, 'Mr macauly');

    Finder checkinField = find.byKey(Key('Check in'));
    await tester.enterText(checkinField, '12/2/2013');

     Finder checkoutField = find.byKey(Key('Check out'));
    await tester.enterText(checkoutField, '13/2/2013');

    Finder linkField = find.byKey(Key('link'));
    await tester.enterText(linkField, '');

     await tester.tap(find.byKey(Key('Continue'))); //Tap Contineu button
  });
}