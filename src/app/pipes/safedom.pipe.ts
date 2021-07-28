import { Pipe, PipeTransform } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safedom'
})
export class SafedomPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer) {}

  transform(value: unknown, ...args: unknown[]): SafeResourceUrl {
    const url: string = "https://open.spotify.com/embed/track/";
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
