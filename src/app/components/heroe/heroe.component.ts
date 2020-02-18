import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../servicios/heroes.service";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html"
})

// He borrado el onInit para probar que tambien
// se puede hacer sin el onInit
export class HeroeComponent {
  heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params['id']); // declarado en el route
      this.heroe = this._heroesService.getHeroe(params["id"]);
    });
  }
}
