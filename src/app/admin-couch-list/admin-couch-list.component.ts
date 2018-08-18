import { Component, OnInit } from '@angular/core';
import {CouchServiceUser} from '../services/couch.service.user';
import {Couch} from '../models/couch.model';
import {Info2ServiceUser} from '../services/info2.service.user';
import {ActivatedRoute} from '@angular/router';
import {Premier2ServiceUser} from '../services/premier2.service.user';

@Component({
  selector: 'app-admin-couch-list',
  templateUrl: './admin-couch-list.component.html',
  styleUrls: ['./admin-couch-list.component.css']
})
export class AdminCouchListComponent implements OnInit {

  constructor(private service: CouchServiceUser,
              private serviceII: Info2ServiceUser,
              private serviceV: Premier2ServiceUser,
              private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => this.loadInfo2s(params['couchId']));
    this.route.params.subscribe(params => this.loadPrem2s(params['couchId']));
  }

  couchs: Couch[] = [ ];
  couchId = '';
  selectedCouchId = 0;
  info2s = [];
  prem2s = [];

  loadInfo2s(couchId) {
    this.couchId = couchId;
    this.serviceII.findInfo2ByCouch(couchId)
      .then(info2s => this.info2s = info2s);
  }

  clickCouch(couchId) {
    this.selectedCouchId = couchId;
    this.serviceII.findInfo2ByCouch(couchId)
     .then(info2s => this.info2s = info2s);

  }

  loadPrem2s(couchId) {
    this.couchId = couchId;
    this.serviceV.findPrem2ByUser(couchId)
      .then(prem2s => this.prem2s = prem2s);
  }

  clickCouchforPrem2(couchId) {
    this.selectedCouchId = couchId;
    this.serviceV.findPrem2ByUser(couchId)
      .then(prem2s => this.prem2s = prem2s);

  }

  openPrem2(couch) {
    this.selectedCouchId = couch;
    this.serviceV.openPrem2(couch)
      .then(() => {
        this.loadPrem2s(couch);
      });
  }

  deletePrem2(prem2Id) {
    this.serviceV.deletePrem2(this.selectedCouchId, prem2Id)
      .then( () => {
        this.loadPrem2s(this.selectedCouchId);
      });
  }

  ngOnInit() {
    this.service.findAllCouchs()
      .then(couchs => this.couchs = couchs);
  }

}
