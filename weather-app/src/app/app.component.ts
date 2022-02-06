import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { filter, switchMap, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'weather-app';
  constructor(private updates:SwUpdate, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.updates.versionUpdates.pipe(
      switchMap(()=> this.snackbar.open('New version available', 'Update Now').afterDismissed()),
      filter(result => result.dismissedByAction),
      map(()=> this.updates.activateUpdate().then(()=> location.reload()))
    ).subscribe();
  }
}
