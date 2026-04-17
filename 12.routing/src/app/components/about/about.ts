import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, RouterLinkWithHref],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
