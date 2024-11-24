<script lang="ts">
	import { base } from '$app/paths';
</script>

<h2 class="h2">Overviews</h2>
<ul class="list-inside list-disc space-y-2">
	<li><a href="{base}/api/v1/items">Items</a></li>
	<li><a href="{base}/api/v1/episodes">Episodes</a></li>
	<li><a href="{base}/api/v1/professions">Professions</a></li>
	<li><a href="{base}/api/v1/shops">Shops</a></li>
	<li><a href="{base}/api/v1/npcs">Npcs</a></li>
	<li><a href="{base}/api/v1/tools">Tools</a></li>
</ul>

<h2 class="h2">Examples</h2>
<ul class="list-inside list-disc space-y-2">
	<li><a href="{base}/api/v1/item/bread">{base}/api/item/bread</a></li>
	<li><a href="{base}/api/v1/episode/hopeport">{base}/api/episode/hopeport</a></li>
	<li><a href="{base}/api/v1/profession/fisher">{base}/api/profession/fisher</a></li>
	<li><a href="{base}/api/v1/shop/kevins_ingredients">{base}/api/v1/shop/kevins_ingredients</a></li>
	<li><a href="{base}/api/v1/npc/kevin">{base}/api/v1/npc/kevin</a></li>
	<li><a href="{base}/api/v1/tool/secateurs">{base}/api/v1/tool/secateurs</a></li>
</ul>

<br />
<p>
	This links don't appear to work in the browser because I am a SvelteKit novice but they work on GET requests I
	promise.
</p>
<p>
	Stop complaining and
	<a href="https://github.com/Ishadijcks/BrighterShores/issues/7" target="_blank">help me fix it!</a>
</p>
