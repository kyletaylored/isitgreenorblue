---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---

<form class="form-inline text-center" id="color-check" data-toggle="validator">
  <div class="input-group input-group-sm">
	  <span class="input-group-addon" id="sizing-addon3">#</span>
	  <input type="text" class="form-control" id="color" placeholder="Add dumb color here." data-error="Bruh, that color is invalid." required data-minlength="6" data-maxlength="6" aria-describedby="sizing-addon3">
	  <span class="input-group-btn">
      <button type="submit" class="btn btn-default">Submit</button>
    </span>
	</div>
</form>