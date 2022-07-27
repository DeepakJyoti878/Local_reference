import { Component, EventEmitter, OnInit, Output  } from '@angular/core';
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  //to make this line event we used = new... line
  @Output('bpCreated') 
  blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>; 
  newServerContent = '';
  NewServerName = '';
  serverNameInput='';
  
  constructor() { }
  ngOnInit(): void {
  }
  onAddServer(nameInput:HTMLInputElement){
    //console.log(nameInput.value);
  this.serverCreated.emit({
    serverName:  nameInput.value,
    serverContent: this.newServerContent
  });
}
onAddBlueprint(){
  this.blueprintCreated.emit();
}
}


