## Responsive Container
The HTML is wrapped in a `<iframe>` so that you can test media queries and simulate different devices.

```html
responsive: true
---
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

<style>
.responsive-grid-example {
    padding: 24px;
    text-align: center;
    background-color: #fff;
    width: 100%
    height: auto;
}

[class*="col-"] {
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #eee;
    background-color: rgba(86,61,124,.15);
    border: 1px solid #ddd;
    border: 1px solid rgba(86,61,124,.2);
}
</style>

<div class='responsive-grid-example'>
    <div class="container">
        <div class="row">
            <div class="box col-xs-12 col-md-6 col-lg-3">.col-xs-12 .col-md-6 .col-lg-3</div>
            <div class="box col-xs-12 col-md-6 col-lg-3">.col-xs-12 .col-md-6 .col-lg-3</div>
            <div class="box col-xs-12 col-md-6 col-lg-3">.col-xs-12 .col-md-6 .col-lg-3</div>
        </div>
    </div>
</div>
```