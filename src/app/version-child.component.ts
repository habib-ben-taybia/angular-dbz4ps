import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-version-child',
  template: `
    <h3>Version {{major}}.{{minor}}</h3>
    <h4>Change log:</h4>
    <ul>
      <li *ngFor="let change of changeLog">{{change}}</li>
    </ul>
  `
})
export class VersionChildComponent implements OnChanges {
  @Input() major = 0;
  @Input() minor = 0;
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    // const log: string[] = [];
    // for (const propName in changes) {
    //   const changedProp = changes[propName];
    //   const to = JSON.stringify(changedProp.currentValue);
    //   if (changedProp.isFirstChange()) {
    //     log.push(`Initial value of ${propName} set to ${to}`);
    //   } else {
    //     const from = JSON.stringify(changedProp.previousValue);
    //     log.push(`${propName} changed from ${from} to ${to}`);
    //   }
    // }
    // this.changeLog.push(log.join(', '));
    // if (changes['major'] !== undefined &&
    //   changes['major'].currentValue !== undefined) {

        console.log('changes[major]:',changes['major'])
        console.log('changes[major].currentValue:',changes['major'].currentValue)
        console.log('changes[major].previousValue:',changes['major'].previousValue)
        console.log('changes[major].firstChange:',changes['major'].firstChange)
        console.log('changes[major].isFirstChange:',changes['major'].isFirstChange)

        console.log('changes[minor]:',changes['minor'])
        console.log('changes[minor].currentValue:',changes['minor'].currentValue)
        console.log('changes[minor].previousValue:',changes['minor'].previousValue)
        console.log('changes[minor].firstChange:',changes['minor'].firstChange)
        console.log('changes[minor].isFirstChange:',changes['minor'].isFirstChange)

  //}

    // for (const propName in changes) {
    //   console.log('propName in changes:',propName) 
    //   //propName=minor (si on clique sur le bouton New minor version )
    //   console.log('typeof(propName):',typeof(propName)) 
    //   //
    //   const changedProp = changes[propName];
    //   console.log('changes[propName]:',changedProp)
    //   //
    //   console.log('typeof(changes[propName]):',typeof(changedProp))
      //
     // console.log('changes[propName][previousValue]:',changedProp[previousValue])
      //
      //console.log('changes[propName][currentValue]:',changedProp[currentValue])
      //
      //console.log('changes[propName][firstChange]:',changedProp[firstChange])
      //
   // }
    //console.log('changes[this.major]:',changes[this.major])
    //console.log('changes[this.minor]:',changes[this.minor])


  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/