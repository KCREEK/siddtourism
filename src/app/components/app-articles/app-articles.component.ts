import { Component, NgModule, OnInit } from "@angular/core";

@Component({
  selector: "app-app-articles",
  templateUrl: "./app-articles.component.html",
  styleUrls: ["./app-articles.component.css"],
})
export class AppArticlesComponent implements OnInit {
  constructor() {}

  artimg: any = "../../../assets/images/articles/img.jpg";

  articles: any[] = [
    { title: "article one", content: "This is article one" },
    { title: "article two", content: "This is article Two" },
    { title: "article three", content: "This is article Three" },
  ];

  ngOnInit() {}
}
