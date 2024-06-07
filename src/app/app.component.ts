import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import EditorJS from "@editorjs/editorjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'test';
  editor: any;
  ngOnInit(): void {
    this.editor = new EditorJS({
      holderId: 'editor-js',

    });
  }
}
