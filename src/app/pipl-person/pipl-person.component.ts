import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-pipl-person",
  templateUrl: "./pipl-person.component.html",
  styleUrls: ["./pipl-person.component.css"]
})
export class PiplPersonComponent implements OnInit {
  @Input("person") person: any;

  constructor() {}

  ngOnInit() {}

  showNames() {
    return this.person.names.map(name => name.display).join(", ");
  }

  showEmails() {
    return this.person.emails.map(email => email.address).join(", ");
  }

  showAddresses() {
    return this.person.addresses.map(address => address.display).join(", ");
  }

  showUrls() {
    return this.person.urls.map(url => url["@name"]).join(", ");
  }

  showPhones() {
    return this.person.phones
      .map(phone => phone.display_international)
      .join(", ");
  }

  showUsernames() {
    return this.person.usernames.map(username => username.content).join(", ");
  }

  showUserIds() {
    return this.person.user_ids.map(user_id => user_id.content).join(", ");
  }

  getImages() {
    return this.person.images.map(image => image.url);
  }

  showJobs() {
    return this.person.jobs.map(job => job.display).join(", ");
  }

  showEducations() {
    return this.person.educations
      .map(education => education.display)
      .join(", ");
  }

  showLanguages() {
    return this.person.languages.map(language => language.language).join(", ");
  }

  showEthinicities() {
    return this.person.ethnicities
      .map(ethnicity => ethnicity.content)
      .join(", ");
  }

  showOriginCountries() {
    return this.person.origin_countries
      .map(origin => origin.country)
      .join(", ");
  }
}
