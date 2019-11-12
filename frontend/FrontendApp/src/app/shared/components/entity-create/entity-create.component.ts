import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

export abstract class EntityCreateComponent implements OnInit {

  @Output()
  public createEntityEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  protected abstract createEntity(form: NgForm): void;

}
