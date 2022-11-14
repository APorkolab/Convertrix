import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'convertrix';

  ngOnInit() {
    var scope = 'scope' ? 'scope' : 'document';
    // utilities
    var get = function (selector: string, scope: { querySelector: (arg0: any, arg1: any) => any; } | undefined) {
      return scope?.querySelector(selector, scope);
    };

    var getAll = function (selector: string, scope: { querySelectorAll: (arg0: any) => any; } | undefined) {
      scope = scope ? scope : document;
      return scope.querySelectorAll(selector);
    };

    // toggle tabs on codeblock
    window.addEventListener("load", function () {
      // get all tab_containers in the document
      var tabContainers = getAll(".tab__container", this.document);

      // bind click event to each tab container
      for (var i = 0; i < tabContainers.length; i++) {
        get('.tab__menu', tabContainers[i]).addEventListener("click", tabClick);
      }

      // each click event is scoped to the tab_container
      function tabClick(event: { currentTarget: { parentNode: any; }; target: any; }) {
        var scope = event.currentTarget.parentNode;
        var clickedTab = event.target;
        var tabs = getAll('.tab', scope);
        var panes = getAll('.tab__pane', scope);
        var activePane = get(`.${clickedTab.getAttribute('data-tab')}`, scope);

        // remove all active tab classes
        for (var i = 0; i < tabs.length; i++) {
          tabs[i].classList.remove('active');
        }

        // remove all active pane classes
        for (var i = 0; i < panes.length; i++) {
          panes[i].classList.remove('active');
        }

        // apply active classes on desired tab and pane
        clickedTab.classList.add('active');
        activePane.classList.add('active');
      }
    });

    //in page scrolling for documentaiton page
    var btns = getAll('.js-btn', document);
    var sections = getAll('.js-section', document);

    function setActiveLink(event: { target: { classList: { add: (arg0: string) => void; }; }; }) {
      // remove all active tab classes
      for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove('selected');
      }

      event.target.classList.add('selected');
    }

    function smoothScrollTo(i: string | number, event: any) {
      var element = sections[i];
      setActiveLink(event);

      window.scrollTo({
        'behavior': 'smooth',
        'top': element.offsetTop - 20,
        'left': 0
      });
    }

    if (btns.length && sections.length > 0) {
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', smoothScrollTo.bind(this, i));
      }
    }

    // fix menu to page-top once user starts scrolling
    window.addEventListener('scroll', function () {
      var docNav = get('.doc__nav > ul', document);

      if (docNav) {
        if (window.pageYOffset > 63) {
          docNav.classList.add('fixed');
        } else {
          docNav.classList.remove('fixed');
        }
      }
    });

    // responsive navigation
    var topNav = get('.menu', document);
    var icon = get('.toggle', document);

    window.addEventListener('load', function () {
      function showNav() {
        if (topNav.className === 'menu') {
          topNav.className += ' responsive';
          icon.className += ' open';
        } else {
          topNav.className = 'menu';
          icon.classList.remove('open');
        }
      }
      icon.addEventListener('click', showNav);
    });
  }




}



