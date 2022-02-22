import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { of } from 'rxjs';

import { concatMap, concatMapTo, first, tap } from 'rxjs/operators';
import { AlbumService } from './album.service';
import { Photo } from './photo.model';
import { PhotoService } from './photo.service';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: ` <p>View DevTools Console</p> `,
  styles: [],
})
export class AppComponent implements OnInit {
  photos: Photo[] = [];
  errorMessage?: string | null;
  constructor(
    private userService: UserService,
    private albumService: AlbumService,
    private photoService: PhotoService
  ) {}
  ngOnInit(): void {
    this.userService
      // .findByEmail('Sincere@april.biz')
      .findByEmail('Lucio_Hettinger@annie.ca')
      .pipe(
        first(),
        tap((users) => console.log(users)),
        concatMap((users) => {
          const userId = users[0].id;
          console.log(userId);
          return this.albumService.getAllByUser(userId);
          // return of(user);
        }),
        tap((albums) => console.log(albums)),
        concatMap((albums) => {
          const albumId = albums[0].id;
          console.log(albumId);
          return this.photoService.getAllByAlbum(albumId);
        })
      )
      .subscribe((data) => console.log(data));
  }
}

// OR: http://localhost:3000/users/5?_embed=albums
// https://github.com/typicode/json-server#relationships
