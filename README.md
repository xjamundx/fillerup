# Fill Er' Up
## Dynamic CSS Injection for base64d SVGs

Totally inspired by http://www.somerandomdude.com/2012/08/12/svg-css-injection/.



## Works Like This

1. Add `<script src="fillerup.js"></script>` to the bottom of your page
1. Base64 your SVGs and make them available via classes in your HTML
1. Add the attribute `data-fill` with a new fill color.

## Example

[Live demo](http://xjamundx.github.io/fillerup/)

    <style>
    .icon-user {
        width: 120px;
        height: 130px;
        background-size: 100% 100%;
        display: inline-block;
        background-repeat: no-repeat;
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTYgMTgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE2IDE4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0MyQzJCRiIgZD0iTTE1Ljk2NywxMy44NDdjLTAuMzA5LTEuNTgtMS42ODUtMi44MzItMy4yOTctMi44MzJIMy4zMzYNCgkJCWMtMS42MTIsMC0zLjAyLDEuMjUyLTMuMzI4LDIuODMyTDAsMTYuNjE1QzAsMTcuNDIsMC41NCwxOCwxLjUwMywxOGgxMi45NjljMC44NjksMCwxLjUwMy0wLjMzLDEuNTAzLTEuMzg1TDE1Ljk2NywxMy44NDd6DQoJCQkgTTcuOTcyLDhjMi4yMDksMCw0LTEuNzkxLDQtNHMtMS43OTEtNC00LTRzLTQsMS43OTEtNCw0UzUuNzYzLDgsNy45NzIsOHoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==');
        margin: 15px;
    }
    </style>
    <i class="icon-user"></i>
    <i class="icon-user" data-fill="#ec6a38"></i>
    <i class="icon-user" data-fill="#7bd454"></i>
    <i class="icon-user" data-fill="#00AEEC"></i>
    <i class="icon-user" data-fill="random"></i>

### Example Screenshot

![Fillerup Screenshot](http://f.cl.ly/items/1A3T0C1k0F1G2x361W1m/Screen%20Shot%202013-04-01%20at%2010.43.28%20AM.png)

## Downsides

1. Only tried it on a few SVGs
1. Currently only works with base64d SVGs
1. Will do weird things if you have multiple `<path>` elements with individual `fill` attributes.

## Todos

1. Possible support for hover states, etc.
1. More optimizations
1. require.js support?
1. support for common svg libraries?