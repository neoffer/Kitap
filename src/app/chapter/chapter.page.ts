import { Component } from '@angular/core';;
import { Events, NavController, Platform } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
// import { SafariViewController } from '@ionic-native/safari-view-controller';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
// declare var SafariViewController: any;

@Component({
    selector: 'app-chapter',
    templateUrl: './chapter.page.html',
    styleUrls: ['./chapter.page.scss'],
})
export class ChapterPage {
    page: any = {};
    chapter: any = {};
    img: any // = "https://cdn.cnn.com/cnnnext/dam/assets/191217180817-fedex-truck-file-super-tease.jpg"

    constructor(
        private events: Events,
        private dataService: DataService,
        private iab: InAppBrowser,
        private platform: Platform,
        private _sanitizer: DomSanitizer,
        // public safariViewController: SafariViewController,
        private navCtrl: NavController
    ) {


        this.dataService.getOneChapter().subscribe((data: any) => {
            this.page = data.page;
            this.chapter = data.chapter;
            console.log(this.chapter)
            this.img = this.chapter.urlToImage;
            console.log(this.img)


            // if (this.platform.is('cordova')) {
            //     this.safariViewController.isAvailable()
            //         .then((available: boolean) => {
            //             if (available) {
            //                 this.safariViewController.mayLaunchUrl(this.news.url)
            //             } else {
            //                 // use fallback browser, example InAppBrowser
            //             }
            //         });
            // }

            //  this.img = this.news.urlToImage;
        })

        // this.events.subscribe("setNews", (data)=> {
        //  this.page = data.page;
        //  this.news = data.news;
        //  // this.img = this._sanitizer.bypassSecurityTrustResourceUrl(this.news.urlToImage)
        //  this.img = this.news.urlToImage;
        //  console.log(this.img)
        // })
    }

    back() {
        this.navCtrl.navigateBack('home');
    }

    getBackground(image) {
        return this._sanitizer.bypassSecurityTrustResourceUrl(image);
    }

    open() {
const browser = this.iab.create(this.chapter.url);
browser.show();
browser.on('loadstop').subscribe(event => {
   browser.insertCSS({ code: "body{color: red;" });
});

        // this.safariViewController.isAvailable()
        //     .then((available: boolean) => {
        //         if (available) {

        //             this.safariViewController.show({
        //                     url: this.news.url,
        //                     hidden: false,
        //                     animated: true,
        //                     transition: 'curl',
        //                     enterReaderModeIfAvailable: true,
        //                     tintColor: '#ff0000'
        //                 })
        //                 .subscribe((result: any) => {
        //                         if (result.event === 'opened') console.log('Opened');
        //                         else if (result.event === 'loaded') console.log('Loaded');
        //                         else if (result.event === 'closed') console.log('Closed');
        //                     },
        //                     (error: any) => console.error(error)
        //                 );

        //         } else {
        //             // use fallback browser, example InAppBrowser
        //         }
        //     });
    }

}