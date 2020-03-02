(window.webpackJsonp = window.webpackJsonp || []).push([[0], { 176: function (e, t, n) { e.exports = n(377) }, 181: function (e, t, n) { }, 182: function (e, t, n) { }, 377: function (e, t, n) { "use strict"; n.r(t); var r = n(1), i = n.n(r), a = n(56), s = n.n(a), o = (n(181), n(8)), c = n(14), l = n(10), u = n(9), d = n(11), h = n(145), m = n.n(h), p = (n(182), n(12)), g = function (e) { function t() { var e, n; Object(o.a)(this, t); for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)i[a] = arguments[a]; return (n = Object(l.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(i)))).state = { showDetails: !1 }, n.handleShowDetails = function () { !1 === n.state.showDetails ? n.setState({ showDetails: !0 }) : n.setState({ showDetails: !1 }) }, n } return Object(d.a)(t, e), Object(c.a)(t, [{ key: "render", value: function () { var e = this, t = this.state.showDetails, n = this.props.event, r = [{ name: "people coming", value: n.yes_rsvp_count }, { name: "open slots", value: n.rsvp_limit - n.yes_rsvp_count }], a = ["#8884d8", "#37c0ba"]; return i.a.createElement("div", { className: "event" }, i.a.createElement("div", { className: "event__Overview" }, i.a.createElement("p", { className: "event__Overview--localDate" }, this.props.event.local_date, " | ", this.props.event.local_time), i.a.createElement("h2", { className: "event__Overview--name" }, this.props.event.name), i.a.createElement("p", { className: "event__Overview--groupName" }, this.props.event.group.name), this.props.event.venue && i.a.createElement("p", { className: "event__Overview--venue" }, "@", this.props.event.venue.name, " | ", this.props.event.venue.address_1, " | ", this.props.event.venue.city), n.rsvp_limit && i.a.createElement(p.f, { height: 150, width: 250 }, i.a.createElement(p.e, null, i.a.createElement(p.d, { data: r, dataKey: "value", nameKey: "name", cx: "50%", cy: "50%", outerRadius: 32, label: !0 }, r.map(function (e, t) { return i.a.createElement(p.b, { key: "cell-".concat(t), fill: a[t] }) })), i.a.createElement(p.c, { iconSize: 10, iconType: "triangle", layout: "horizontal", verticalAlign: "bottom", align: "center" }), i.a.createElement(p.i, null))), !n.rsvp_limit && i.a.createElement("p", null, n.yes_rsvp_count, " People coming"), t && i.a.createElement("button", { className: "details-btn", onClick: function () { return e.handleShowDetails() } }, "hide details"), !t && i.a.createElement("button", { className: "details-btn", onClick: function () { return e.handleShowDetails() } }, "show details")), t && i.a.createElement("div", { className: "event__Details" }, i.a.createElement("h3", null, "Infos"), i.a.createElement("h4", null, i.a.createElement("a", { href: this.props.event.link, target: "_blank" }, "GoTo MeetUp")), i.a.createElement("p", { className: "event__Details--description", dangerouslySetInnerHTML: { __html: this.props.event.description } }))) } }]), t }(r.Component), v = function (e) { function t() { return Object(o.a)(this, t), Object(l.a)(this, Object(u.a)(t).apply(this, arguments)) } return Object(d.a)(t, e), Object(c.a)(t, [{ key: "render", value: function () { return i.a.createElement("ul", { className: "EventList" }, this.props.events.map(function (e) { return i.a.createElement("li", { key: e.id }, i.a.createElement(g, { event: e })) })) } }]), t }(r.Component), f = function (e) { function t(e) { var n; return Object(o.a)(this, t), (n = Object(l.a)(this, Object(u.a)(t).call(this, e))).getStyle = function () { return { color: n.color } }, n.color = null, n } return Object(d.a)(t, e), Object(c.a)(t, [{ key: "render", value: function () { return i.a.createElement("div", { className: "alert" }, i.a.createElement("p", { style: this.getStyle() }, this.props.text)) } }]), t }(r.Component), b = function (e) { function t(e) { var n; return Object(o.a)(this, t), (n = Object(l.a)(this, Object(u.a)(t).call(this, e))).color = "blue", n } return Object(d.a)(t, e), t }(f), w = function (e) { function t(e) { var n; return Object(o.a)(this, t), (n = Object(l.a)(this, Object(u.a)(t).call(this, e))).color = "orange", n } return Object(d.a)(t, e), t }(f), k = function (e) { function t(e) { var n; return Object(o.a)(this, t), (n = Object(l.a)(this, Object(u.a)(t).call(this, e))).color = "red", n } return Object(d.a)(t, e), t }(f), E = n(27), _ = n.n(E), y = n(60), z = n(61), S = n.n(z), j = { city: { id: 1007700, city: "M\xfcnchen", lat: 48.14, lon: 11.58, state: "", country: "de", zip: "meetup3", member_count: 1257 }, events: [{ created: 1563825339e3, duration: 9e6, id: "263370107", name: "Microservices mit dem MicroProfile 3.x", rsvp_limit: 80, date_in_series_pattern: !1, status: "upcoming", time: 15669252e5, local_date: "2019-09-26", local_time: "19:00", updated: 1563825339e3, utc_offset: 72e5, waitlist_count: 79, yes_rsvp_count: 80, venue: { id: 26266792, name: "adesso AG", lat: 53.54524230957031, lon: 9.950983047485352, repinned: !1, address_1: "Gro\xdfe Elbstra\xdfe 36", city: "Hamburg", country: "de", localized_country_name: "Deutschland" }, group: { created: 1387402147e3, name: "Java User Group Hamburg", id: 11500362, join_mode: "open", lat: 53.54999923706055, lon: 10, urlname: "jug-hamburg", who: "Mitglieder", localized_location: "Hamburg, Deutschland", state: "", country: "de", region: "de_DE", timezone: "Europe/Berlin" }, link: "https://www.meetup.com/de-DE/jug-hamburg/events/263370107/", description: "<p>Wer Microservices in Java entwickeln m\xf6chte, muss nicht zwangsl\xe4ufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verf\xfcgbar sind und bez\xfcglich ihrer Funktionalit\xe4t stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) f\xfcr die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu z\xe4hlen die Unterst\xfctzung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. F\xfcr den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gew\xe4hlt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte f\xfcr Enterprise Java und Systemintegration unterst\xfctzt er seine Kunden \xfcberwiegend durch Entwicklung, Reviews oder die Durchf\xfchrung von Schulungen. Thilo ist (Co-)Autor mehrerer B\xfccher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelm\xe4\xdfig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ", visibility: "public", member_pay_fee: !1 }, { created: 1563825339e3, duration: 9e6, id: "263370107", name: "Microservices mit dem MicroProfile 3.x", rsvp_limit: 80, date_in_series_pattern: !1, status: "upcoming", time: 15669252e5, local_date: "2019-09-27", local_time: "19:00", updated: 1563825339e3, utc_offset: 72e5, waitlist_count: 79, yes_rsvp_count: 80, venue: { id: 26266792, name: "adesso AG", lat: 53.54524230957031, lon: 9.950983047485352, repinned: !1, address_1: "Gro\xdfe Elbstra\xdfe 36", city: "Hamburg", country: "de", localized_country_name: "Deutschland" }, group: { created: 1387402147e3, name: "Java User Group Hamburg", id: 11500362, join_mode: "open", lat: 53.54999923706055, lon: 10, urlname: "jug-hamburg", who: "Mitglieder", localized_location: "Hamburg, Deutschland", state: "", country: "de", region: "de_DE", timezone: "Europe/Berlin" }, link: "https://www.meetup.com/de-DE/jug-hamburg/events/263370107/", description: "<p>Wer Microservices in Java entwickeln m\xf6chte, muss nicht zwangsl\xe4ufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verf\xfcgbar sind und bez\xfcglich ihrer Funktionalit\xe4t stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) f\xfcr die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu z\xe4hlen die Unterst\xfctzung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. F\xfcr den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gew\xe4hlt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte f\xfcr Enterprise Java und Systemintegration unterst\xfctzt er seine Kunden \xfcberwiegend durch Entwicklung, Reviews oder die Durchf\xfchrung von Schulungen. Thilo ist (Co-)Autor mehrerer B\xfccher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelm\xe4\xdfig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ", visibility: "public", member_pay_fee: !1 }, { created: 1563825339e3, duration: 9e6, id: "263370107", name: "Microservices mit dem MicroProfile 3.x", rsvp_limit: 80, date_in_series_pattern: !1, status: "upcoming", time: 15669252e5, local_date: "2019-09-28", local_time: "19:00", updated: 1563825339e3, utc_offset: 72e5, waitlist_count: 79, yes_rsvp_count: 80, venue: { id: 26266792, name: "adesso AG", lat: 53.54524230957031, lon: 9.950983047485352, repinned: !1, address_1: "Gro\xdfe Elbstra\xdfe 36", city: "Hamburg", country: "de", localized_country_name: "Deutschland" }, group: { created: 1387402147e3, name: "Java User Group Hamburg", id: 11500362, join_mode: "open", lat: 53.54999923706055, lon: 10, urlname: "jug-hamburg", who: "Mitglieder", localized_location: "Hamburg, Deutschland", state: "", country: "de", region: "de_DE", timezone: "Europe/Berlin" }, link: "https://www.meetup.com/de-DE/jug-hamburg/events/263370107/", description: "<p>Wer Microservices in Java entwickeln m\xf6chte, muss nicht zwangsl\xe4ufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verf\xfcgbar sind und bez\xfcglich ihrer Funktionalit\xe4t stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) f\xfcr die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu z\xe4hlen die Unterst\xfctzung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. F\xfcr den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gew\xe4hlt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte f\xfcr Enterprise Java und Systemintegration unterst\xfctzt er seine Kunden \xfcberwiegend durch Entwicklung, Reviews oder die Durchf\xfchrung von Schulungen. Thilo ist (Co-)Autor mehrerer B\xfccher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelm\xe4\xdfig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ", visibility: "public", member_pay_fee: !1 }, { created: 1563825339e3, duration: 9e6, id: "263370107", name: "Microservices mit dem MicroProfile 3.x", rsvp_limit: 80, date_in_series_pattern: !1, status: "upcoming", time: 15669252e5, local_date: "2019-09-29", local_time: "19:00", updated: 1563825339e3, utc_offset: 72e5, waitlist_count: 79, yes_rsvp_count: 80, venue: { id: 26266792, name: "adesso AG", lat: 53.54524230957031, lon: 9.950983047485352, repinned: !1, address_1: "Gro\xdfe Elbstra\xdfe 36", city: "Hamburg", country: "de", localized_country_name: "Deutschland" }, group: { created: 1387402147e3, name: "Java User Group Hamburg", id: 11500362, join_mode: "open", lat: 53.54999923706055, lon: 10, urlname: "jug-hamburg", who: "Mitglieder", localized_location: "Hamburg, Deutschland", state: "", country: "de", region: "de_DE", timezone: "Europe/Berlin" }, link: "https://www.meetup.com/de-DE/jug-hamburg/events/263370107/", description: "<p>Wer Microservices in Java entwickeln m\xf6chte, muss nicht zwangsl\xe4ufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verf\xfcgbar sind und bez\xfcglich ihrer Funktionalit\xe4t stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) f\xfcr die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu z\xe4hlen die Unterst\xfctzung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. F\xfcr den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gew\xe4hlt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte f\xfcr Enterprise Java und Systemintegration unterst\xfctzt er seine Kunden \xfcberwiegend durch Entwicklung, Reviews oder die Durchf\xfchrung von Schulungen. Thilo ist (Co-)Autor mehrerer B\xfccher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelm\xe4\xdfig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ", visibility: "public", member_pay_fee: !1 }, { created: 1563825339e3, duration: 9e6, id: "263370107", name: "Microservices mit dem MicroProfile 3.x", rsvp_limit: 80, date_in_series_pattern: !1, status: "upcoming", time: 15669252e5, local_date: "2019-09-29", local_time: "19:00", updated: 1563825339e3, utc_offset: 72e5, waitlist_count: 79, yes_rsvp_count: 80, venue: { id: 26266792, name: "adesso AG", lat: 53.54524230957031, lon: 9.950983047485352, repinned: !1, address_1: "Gro\xdfe Elbstra\xdfe 36", city: "Hamburg", country: "de", localized_country_name: "Deutschland" }, group: { created: 1387402147e3, name: "Java User Group Hamburg", id: 11500362, join_mode: "open", lat: 53.54999923706055, lon: 10, urlname: "jug-hamburg", who: "Mitglieder", localized_location: "Hamburg, Deutschland", state: "", country: "de", region: "de_DE", timezone: "Europe/Berlin" }, link: "https://www.meetup.com/de-DE/jug-hamburg/events/263370107/", description: "<p>Wer Microservices in Java entwickeln m\xf6chte, muss nicht zwangsl\xe4ufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verf\xfcgbar sind und bez\xfcglich ihrer Funktionalit\xe4t stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) f\xfcr die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu z\xe4hlen die Unterst\xfctzung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. F\xfcr den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gew\xe4hlt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte f\xfcr Enterprise Java und Systemintegration unterst\xfctzt er seine Kunden \xfcberwiegend durch Entwicklung, Reviews oder die Durchf\xfchrung von Schulungen. Thilo ist (Co-)Autor mehrerer B\xfccher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelm\xe4\xdfig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ", visibility: "public", member_pay_fee: !1 }, { created: 1563825339e3, duration: 9e6, id: "263370107", name: "Microservices mit dem MicroProfile 3.x", rsvp_limit: 80, date_in_series_pattern: !1, status: "upcoming", time: 15669252e5, local_date: "2019-09-30", local_time: "19:00", updated: 1563825339e3, utc_offset: 72e5, waitlist_count: 79, yes_rsvp_count: 80, venue: { id: 26266792, name: "adesso AG", lat: 53.54524230957031, lon: 9.950983047485352, repinned: !1, address_1: "Gro\xdfe Elbstra\xdfe 36", city: "Hamburg", country: "de", localized_country_name: "Deutschland" }, group: { created: 1387402147e3, name: "Java User Group Hamburg", id: 11500362, join_mode: "open", lat: 53.54999923706055, lon: 10, urlname: "jug-hamburg", who: "Mitglieder", localized_location: "Hamburg, Deutschland", state: "", country: "de", region: "de_DE", timezone: "Europe/Berlin" }, link: "https://www.meetup.com/de-DE/jug-hamburg/events/263370107/", description: "<p>Wer Microservices in Java entwickeln m\xf6chte, muss nicht zwangsl\xe4ufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verf\xfcgbar sind und bez\xfcglich ihrer Funktionalit\xe4t stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) f\xfcr die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu z\xe4hlen die Unterst\xfctzung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. F\xfcr den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gew\xe4hlt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte f\xfcr Enterprise Java und Systemintegration unterst\xfctzt er seine Kunden \xfcberwiegend durch Entwicklung, Reviews oder die Durchf\xfchrung von Schulungen. Thilo ist (Co-)Autor mehrerer B\xfccher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelm\xe4\xdfig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ", visibility: "public", member_pay_fee: !1 }, { created: 1563825339e3, duration: 9e6, id: "263370107", name: "Microservices mit dem MicroProfile 3.x", rsvp_limit: 80, date_in_series_pattern: !1, status: "upcoming", time: 15669252e5, local_date: "2019-10-01", local_time: "19:00", updated: 1563825339e3, utc_offset: 72e5, waitlist_count: 79, yes_rsvp_count: 55, venue: { id: 26266792, name: "adesso AG", lat: 53.54524230957031, lon: 9.950983047485352, repinned: !1, address_1: "Gro\xdfe Elbstra\xdfe 36", city: "Hamburg", country: "de", localized_country_name: "Deutschland" }, group: { created: 1387402147e3, name: "Java User Group Hamburg", id: 11500362, join_mode: "open", lat: 53.54999923706055, lon: 10, urlname: "jug-hamburg", who: "Mitglieder", localized_location: "Hamburg, Deutschland", state: "", country: "de", region: "de_DE", timezone: "Europe/Berlin" }, link: "https://www.meetup.com/de-DE/jug-hamburg/events/263370107/", description: "<p>Wer Microservices in Java entwickeln m\xf6chte, muss nicht zwangsl\xe4ufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verf\xfcgbar sind und bez\xfcglich ihrer Funktionalit\xe4t stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) f\xfcr die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu z\xe4hlen die Unterst\xfctzung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. F\xfcr den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gew\xe4hlt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte f\xfcr Enterprise Java und Systemintegration unterst\xfctzt er seine Kunden \xfcberwiegend durch Entwicklung, Reviews oder die Durchf\xfchrung von Schulungen. Thilo ist (Co-)Autor mehrerer B\xfccher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelm\xe4\xdfig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ", visibility: "public", member_pay_fee: !1 }, { created: 1563825339e3, duration: 9e6, id: "263370107", name: "Microservices mit dem MicroProfile 3.x", date_in_series_pattern: !1, status: "upcoming", time: 15669252e5, local_date: "2019-10-01", local_time: "19:00", updated: 1563825339e3, utc_offset: 72e5, waitlist_count: 79, yes_rsvp_count: 80, venue: { id: 26266792, lat: 53.54524230957031, lon: 9.950983047485352, repinned: !1, address_1: "Gro\xdfe Elbstra\xdfe 36", city: "Hamburg", country: "de", localized_country_name: "Deutschland" }, group: { created: 1387402147e3, name: "Java User Group Hamburg", id: 11500362, join_mode: "open", lat: 53.54999923706055, lon: 10, urlname: "jug-hamburg", who: "Mitglieder", localized_location: "Hamburg, Deutschland", state: "", country: "de", region: "de_DE", timezone: "Europe/Berlin" }, link: "https://www.meetup.com/de-DE/jug-hamburg/events/263370107/", description: "<p>Wer Microservices in Java entwickeln m\xf6chte, muss nicht zwangsl\xe4ufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verf\xfcgbar sind und bez\xfcglich ihrer Funktionalit\xe4t stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) f\xfcr die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu z\xe4hlen die Unterst\xfctzung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. F\xfcr den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gew\xe4hlt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte f\xfcr Enterprise Java und Systemintegration unterst\xfctzt er seine Kunden \xfcberwiegend durch Entwicklung, Reviews oder die Durchf\xfchrung von Schulungen. Thilo ist (Co-)Autor mehrerer B\xfccher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelm\xe4\xdfig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ", visibility: "public", member_pay_fee: !1 }] }; function O() { return (O = Object(y.a)(_.a.mark(function e(t) { var n, r, i; return _.a.wrap(function (e) { for (; ;)switch (e.prev = e.next) { case 0: if (!window.location.href.startsWith("http://localhost")) { e.next = 2; break } return e.abrupt("return", [{ city: "Munich", country: "de", localized_country_name: "Germany", name_string: "Munich, Germany", zip: "meetup3", lat: 48.14, lon: 11.58 }, { city: "Munich", country: "us", localized_country_name: "USA", state: "ND", name_string: "Munich, North Dakota, USA", zip: "58352", lat: 48.66, lon: -98.85 }]); case 2: return e.next = 4, D(); case 4: if (!(n = e.sent)) { e.next = 11; break } return r = "https://api.meetup.com/find/locations?&sign=true&photo-host=public&query=" + t + "&access_token=" + n, e.next = 9, S.a.get(r); case 9: return i = e.sent, e.abrupt("return", i.data); case 11: return e.abrupt("return", []); case 12: case "end": return e.stop() } }, e) }))).apply(this, arguments) } function T(e, t, n) { return M.apply(this, arguments) } function M() { return (M = Object(y.a)(_.a.mark(function e(t, n, r) { var i, a, s, o, c; return _.a.wrap(function (e) { for (; ;)switch (e.prev = e.next) { case 0: if (!window.location.href.startsWith("http://localhost")) { e.next = 2; break } return e.abrupt("return", j.events); case 2: if (navigator.onLine) { e.next = 5; break } return i = localStorage.getItem("lastEvents"), e.abrupt("return", JSON.parse(i)); case 5: return e.next = 7, D(); case 7: if (!(a = e.sent)) { e.next = 19; break } return s = "https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token=" + a, t && n && (s += "&lat=" + t + "&lon=" + n), r && (s += "&page=" + r), t && n && r && (s += "&lat=" + t + "&lon=" + n + "&page=" + r), e.next = 15, S.a.get(s); case 15: return o = e.sent, (c = o.data.events).length && localStorage.setItem("lastEvents", JSON.stringify(c)), e.abrupt("return", c); case 19: case "end": return e.stop() } }, e) }))).apply(this, arguments) } function D() { var e = localStorage.getItem("access_token"); if (!e) { var t = new URLSearchParams(window.location.search).get("code"); return t ? x("get", t) : (window.location.href = "https://secure.meetup.com/oauth2/authorize?client_id=p7ek3hd2gcir2hpcvsih91or6d&response_type=code&redirect_uri=https://chrisxkoch.github.io/meetup/", null) } var n = localStorage.getItem("last_saved_time"); return e && Date.now() - n < 36e5 ? e : x("renew", localStorage.getItem("refresh_token")) } function x(e, t) { return F.apply(this, arguments) } function F() { return (F = Object(y.a)(_.a.mark(function e(t, n) { var r, i; return _.a.wrap(function (e) { for (; ;)switch (e.prev = e.next) { case 0: return "get" === t ? r = "https://977jsu04r2.execute-api.eu-central-1.amazonaws.com/dev/api/token/" + n : "renew" === t && (r = "https://977jsu04r2.execute-api.eu-central-1.amazonaws.com/dev/api/refreshtoken/" + n), e.next = 3, S.a.get(r); case 3: return i = e.sent, localStorage.setItem("access_token", i.data.access_token), localStorage.setItem("refresh_token", i.data.refresh_token), localStorage.setItem("last_saved_time", Date.now()), e.abrupt("return", i.data.access_token); case 8: case "end": return e.stop() } }, e) }))).apply(this, arguments) } var A = function (e) { function t() { var e, n; Object(o.a)(this, t); for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)i[a] = arguments[a]; return (n = Object(l.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(i)))).state = { query: "", suggestions: [], infoText: "", warningText: "" }, n.handleInputChanged = function (e) { var t = e.target.value; n.setState({ query: t }), navigator.onLine ? n.props.updateEvents({ warningText: "" }) : n.props.updateEvents({ warningText: "No Network Connection! Event list loaded from last session." }), function (e) { return O.apply(this, arguments) }(t).then(function (e) { n.setState({ suggestions: e }), t && 0 === e.length ? n.setState({ infoText: "We can not find the city you are looking for. Please try another city" }) : n.setState({ infoText: "" }) }) }, n.handleItemClicked = function (e, t, r) { n.setState({ query: e, suggestions: [] }), n.props.updateEvents(t, r) }, n } return Object(d.a)(t, e), Object(c.a)(t, [{ key: "render", value: function () { var e = this; return i.a.createElement("div", { className: "CitySearch" }, i.a.createElement(b, { text: this.state.infoText }), i.a.createElement("input", { type: "text", className: "city", value: this.state.query, onChange: this.handleInputChanged, placeholder: "Your City of Choice" }), i.a.createElement("ul", { className: "suggestions" }, this.state.suggestions.map(function (t) { return i.a.createElement("li", { key: t.name_string, onClick: function () { return e.handleItemClicked(t.name_string, t.lat, t.lon) } }, t.name_string) }))) } }]), t }(r.Component), P = function (e) { function t() { var e, n; Object(o.a)(this, t); for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)i[a] = arguments[a]; return (n = Object(l.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(i)))).state = { numberOfEvents: 32, infoText: "" }, n.handleInputChanged = function (e) { var t = e.target.value; n.setState({ numberOfEvents: t }), n.props.updateEvents(null, null, t), t < 1 ? n.setState({ infoText: "Number must be 1 or greater" }) : n.setState({ infoText: "" }) }, n } return Object(d.a)(t, e), Object(c.a)(t, [{ key: "render", value: function () { return i.a.createElement("div", { className: "numberOfEvents" }, i.a.createElement("label", null, "Number of Events: "), i.a.createElement("input", { type: "text", id: "numberOfEvents__input", value: this.state.numberOfEvents, onChange: this.handleInputChanged }), i.a.createElement(k, { text: this.state.infoText })) } }]), t }(r.Component), J = function (e) { function t() { var e, n; Object(o.a)(this, t); for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)i[a] = arguments[a]; return (n = Object(l.a)(this, (e = Object(u.a)(t)).call.apply(e, [this].concat(i)))).state = { events: [], page: null, defaultCity: "", lat: null, lon: null, warningText: "" }, n.updateEvents = function (e, t, r) { navigator.onLine ? n.setState({ warningText: "" }) : n.setState({ warningText: "No Network Connection! Event list loaded from last session." }), e && t ? T(e, t, n.state.page).then(function (r) { return n.setState({ events: r, lat: e, lon: t }) }) : r ? T(n.state.lat, n.state.lon, r).then(function (e) { return n.setState({ events: e, page: r }) }) : T(n.state.lat, n.state.lon, n.state.page).then(function (e) { return n.setState({ events: e }) }) }, n.countEventsOnADate = function (e) { for (var t = 0, r = 0; r < n.state.events.length; r += 1)n.state.events[r].local_date === e && (t += 1); return t }, n.getData = function () { for (var e = [], t = m()(), r = 0; r < 7; r += 1) { t.add(1, "days"); var i = t.format("YYYY-MM-DD"), a = n.countEventsOnADate(i); e.push({ date: i, number: a }) } return e }, n } return Object(d.a)(t, e), Object(c.a)(t, [{ key: "componentDidMount", value: function () { var e = this; T().then(function (t) { return e.setState({ events: t }) }) } }, { key: "render", value: function () { return i.a.createElement("div", { className: "App" }, i.a.createElement("div", { className: "headLine" }, i.a.createElement("h1", null, "MeetUp", i.a.createElement("span", null, "s to come"))), i.a.createElement(A, { updateEvents: this.updateEvents }), i.a.createElement(w, { text: this.state.warningText }), i.a.createElement(P, { updateEvents: this.updateEvents, numberOfEvents: this.state.events.length, lat: this.state.lat, lon: this.state.lon }), i.a.createElement("div", { className: "chartWrapper" }, i.a.createElement(p.f, { height: 250 }, i.a.createElement(p.h, { margin: { top: 20, right: 20, bottom: 20, left: -20 } }, i.a.createElement(p.a, { stroke: "#eee", strokeDasharray: "5 5" }), i.a.createElement(p.j, { type: "category", dataKey: "date", name: "date" }), i.a.createElement(p.k, { type: "number", dataKey: "number", name: "number of events", allowDecimals: !1 }), i.a.createElement(p.i, { cursor: { strokeDasharray: "3 3" } }), i.a.createElement(p.g, { data: this.getData(), fill: "#8884d8" })))), i.a.createElement(v, { events: this.state.events })) } }]), t }(r.Component), C = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)); function I(e, t) { navigator.serviceWorker.register(e).then(function (e) { e.onupdatefound = function () { var n = e.installing; null != n && (n.onstatechange = function () { "installed" === n.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."), t && t.onUpdate && t.onUpdate(e)) : (console.log("Content is cached for offline use."), t && t.onSuccess && t.onSuccess(e))) }) } }).catch(function (e) { console.error("Error during service worker registration:", e) }) } var B = n(157); s.a.render(i.a.createElement(J, null), document.getElementById("root")), function (e) { if ("serviceWorker" in navigator) { if (new URL("/meetup", window.location.href).origin !== window.location.origin) return; window.addEventListener("load", function () { var t = "".concat("/meetup", "/service-worker.js"); C ? (function (e, t) { fetch(e).then(function (n) { var r = n.headers.get("content-type"); 404 === n.status || null != r && -1 === r.indexOf("javascript") ? navigator.serviceWorker.ready.then(function (e) { e.unregister().then(function () { window.location.reload() }) }) : I(e, t) }).catch(function () { console.log("No internet connection found. App is running in offline mode.") }) }(t, e), navigator.serviceWorker.ready.then(function () { console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA") })) : I(t, e) }) } }(), B.config("3082586dca2a42b9915c25ac92e5ffd9").install() } }, [[176, 1, 2]]]);
//# sourceMappingURL=main.aa4f0e01.chunk.js.map