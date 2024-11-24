export enum ItemId {
	/** Chef **/
	// Ingredients
	Bread = '/item/bread',
	Butter = '/item/butter',
	Cabbage = '/item/cabbage',
	RawChicken = '/item/raw_chicken',
	Cream = '/item/cream',
	Gelatin = '/item/gelatin',
	LemonJuice = '/item/lemon_juice',
	Pastry = '/item/pastry',
	RawSausages = '/item/raw_sausages',
	SoySauce = '/item/soy_sauce',
	Stock = '/item/stock',
	Wine = '/item/wine',

	BasicRawBacon = '/item/basic_raw_bacon',
	AppetizingRawBacon = '/item/appetizing_raw_bacon',
	FineRawBacon = '/item/fine_raw_bacon',
	TastyRawBacon = '/item/tasty_raw_bacon',
	DeliciousRawBacon = '/item/delicious_raw_bacon',
	GourmetRawBacon = '/item/gourmet_raw_bacon',
	// TODO(@Isha): Some of these belong in foraging and other professions
	GolbranthBeetroot = '/item/golbranth_beetroot',
	TarangBeetroot = '/item/tarang_beetroot',
	KalbBeetroot = '/item/kalb_beetroot',
	FlexhairBeetroot = '/item/flexhair_beetroot',
	ZingBeetroot = '/item/zing_beetroot',
	OldclayBeetroot = '/item/oldclay_beetroot',
	FurtopBeetroot = '/item/furtop_beetroot',
	OlgraveBeetroot = '/item/olgrave_beetroot',
	VolbarnBeetroot = '/item/volbarn_beetroot',
	JamatoBeetroot = '/item/jamato_beetroot',

	BasicEggs = '/item/basic_eggs',
	AppetizingEggs = '/item/appetizing_eggs',
	TastyEggs = '/item/tasty_eggs',
	DeliciousEggs = '/item/delicious_eggs',
	GourmetEggs = '/item/gourmet_eggs',

	DeepsideGarlic = '/item/deepside_garlic',
	FireveinGarlic = '/item/firevein_garlic',
	LangardGarlic = '/item/langard_garlic',
	ShelkramGarlic = '/item/shelkram_garlic',
	GrottoGarlic = '/item/grotto_garlic',
	AmberfleshGarlic = '/item/amberflesh_garlic',
	WeldbulbGarlic = '/item/weldbulb_garlic',

	ValentLeek = '/item/valent_leek',
	BandedLeek = '/item/banded_leek',
	PineshadeLeek = '/item/pineshade_leek',
	GlintLeek = '/item/glint_leek',
	WondrousLeek = '/item/wondrous_leek',
	GoldenLeek = '/item/golden_leek',

	BasicMixedVegetables = '/item/basic_mixed_vegetables',
	AppetizingMixedVegetables = '/item/appetizing_mixed_vegetables',
	FineMixedVegetables = '/item/fine_mixed_vegetables',
	TastyMixedVegetables = '/item/tasty_mixed_vegetables',
	DeliciousMixedVegetables = '/item/delicious_mixed_vegetables',
	GourmetMixedVegetables = '/item/gourmet_mixed_vegetables',

	// Dishes
	BasicBaconSandwich = '/item/basic_bacon_sandwich',
	AppetizingBaconSandwich = '/item/appetizing_bacon_sandwich',
	FineBaconSandwich = '/item/fine_bacon_sandwich',
	TastyBaconSandwich = '/item/tasty_bacon_sandwich',
	DeliciousBaconSandwich = '/item/delicious_bacon_sandwich',
	GourmetBaconSandwich = '/item/gourmet_bacon_sandwich',

	BasicChickenAndLeekPie = '/item/basic_chicken_and_leek_pie',
	AppetizingChickenAndLeekPie = '/item/appetizing_chicken_and_leek_pie',
	FineChickenAndLeekPie = '/item/fine_chicken_and_leek_pie',
	TastyChickenAndLeekPie = '/item/tasty_chicken_and_leek_pie',
	DeliciousChickenAndLeekPie = '/item/delicious_chicken_and_leek_pie',
	GourmetChickenAndLeekPie = '/item/gourmet_chicken_and_leek_pie',

	BasicCodAndChips = '/item/basic_cod_and_chips',
	AppetizingCodAndChips = '/item/appetizing_cod_and_chips',
	FineCodAndChips = '/item/fine_cod_and_chips',
	TastyCodAndChips = '/item/tasty_cod_and_chips',
	DeliciousCodAndChips = '/item/delicious_cod_and_chips',
	SumptuousCodAndChips = '/item/sumptuous_cod_and_chips',
	GourmetCodAndChips = '/item/gourmet_cod_and_chips',

	CommonFriedRayWings = '/item/common_fried_ray_wings',
	DimFriedRayWings = '/item/dim_fried_ray_wings',
	SoldierFriedRayWings = '/item/soldier_fried_ray_wings',
	NimbleFriedRayWings = '/item/nimble_fried_ray_wings',
	TigerFriedRayWings = '/item/tiger_fried_ray_wings',
	BroadFriedRayWings = '/item/broad_fried_ray_wings',
	JadeFriedRayWings = '/item/jade_fried_ray_wings',
	PrimeFriedRayWings = '/item/prime_fried_ray_wings',

	PlacidGrilledBass = '/item/placid_grilled_bass',
	StripedGrilledBass = '/item/striped_grilled_bass',
	EmeraldGrilledBass = '/item/emerald_grilled_bass',
	DroptheGrilledBass = '/item/dropthe_grilled_bass',
	GiantGrilledBass = '/item/giant_grilled_bass',

	YellowtailGurnardSoup = '/item/yellowtail_gurnard_soup',
	BigeyeGurnardSoup = '/item/bigeye_gurnard_soup',
	BlackfinGurnardSoup = '/item/blackfin_gurnard_soup',
	ShinyGurnardSoup = '/item/shiny_gurnard_soup',
	TorpedoGurnardSoup = '/item/torpedo_gurnard_soup',
	GrandGurnardSoup = '/item/grand_gurnard_soup',

	LesserJelliedEels = '/item/lesser_jellied_eels',
	GrayJelliedEels = '/item/gray_jellied_eels',
	RockyJelliedEels = '/item/rocky_jellied_eels',
	RordJelliedEels = '/item/rord_jellied_eels',
	MorayJelliedEels = '/item/moray_jellied_eels',
	CongerJelliedEels = '/item/conger_jellied_eels',
	LeopardJelliedEels = '/item/leopard_jellied_eels',
	GreaterJelliedEels = '/item/greater_jellied_eels',

	AppetizingLobsterThermidor = '/item/appetizing_lobster_thermidor',
	FineLobsterThermidor = '/item/fine_lobster_thermidor',
	DeliciousLobsterThermidor = '/item/delicious_lobster_thermidor',
	GourmetLobsterThermidor = '/item/gourmet_lobster_thermidor',

	BasicOmelette = '/item/basic_omelette',
	AppetizingOmelette = '/item/appetizing_omelette',
	TastyOmelette = '/item/tasty_omelette',
	DeliciousOmelette = '/item/delicious_omelette',
	GourmetOmelette = '/item/gourmet_omelette',

	BeachOysterWithLemonJuice = '/item/beach_oyster_with_lemon_juice',
	SignalOystersWithLemonJuice = '/item/signal_oysters_with_lemon_juice',
	SpeckledOystersWithLemonJuice = '/item/speckled_oysters_with_lemon_juice',
	RustyOystersWithLemonJuice = '/item/rusty_oysters_with_lemon_juice',

	UnicornPufferSashimi = '/item/unicorn_puffer_sashimi',

	BasicSausageAndMash = '/item/basic_sausage_and_mash',
	AppetizingSausageAndMash = '/item/appetizing_sausage_and_mash',
	FineSausageAndMash = '/item/fine_sausage_and_mash',
	TastySausageAndMash = '/item/tasty_sausage_and_mash',
	DeliciousSausageAndMash = '/item/delicious_sausage_and_mash',
	GourmetSausageAndMash = '/item/gourmet_sausage_and_mash',

	BasicVegetableStew = '/item/basic_vegetable_stew',
	AppetizingVegetableStew = '/item/appetizing_vegetable_stew',
	FineVegetableStew = '/item/fine_vegetable_stew',
	TastyVegetableStew = '/item/tasty_vegetable_stew',
	DeliciousVegetableStew = '/item/delicious_vegetable_stew',
	GourmetVegetableStew = '/item/gourmet_vegetable_stew',

	/** Fisher **/
	// Active Fish
	PlacidBass = '/item/placid_bass',
	StripedBass = '/item/striped_bass',
	EmeraldBass = '/item/emerald_bass',
	DroptheBass = '/item/dropthe_bass',
	GiantBass = '/item/giant_bass',

	SlightCod = '/item/slight_cod',
	WaltzingCod = '/item/waltzing_cod',
	TealCod = '/item/teal_cod',
	PearlyCod = '/item/pearly_cod',
	MosaicCod = '/item/mosaic_cod',
	BurlyCod = '/item/burly_cod',
	EmperorCod = '/item/emperor_cod',

	LesserEel = '/item/lesser_eel',
	GrayEel = '/item/gray_eel',
	RockyEel = '/item/rocky_eel',
	RordEel = '/item/rord_eel',
	MorayEel = '/item/moray_eel',
	CongerEel = '/item/conger_eel',
	LeopardEel = '/item/leopard_eel',
	GreaterEel = '/item/greater_eel',

	MottledFlounder = '/item/mottled_flounder',
	OliveFlounder = '/item/olive_flounder',
	StoneFlounder = '/item/stone_flounder',
	ArrowtoothFlounder = '/item/arrowtooth_flounder',
	FloweryFlounder = '/item/flowery_flounder',
	JellyFlounder = '/item/jelly_flounder',
	PeacockFlounder = '/item/peacock_flounder',
	StarryFlounder = '/item/starry_flounder',
	BlackFlounder = '/item/black_flounder',

	YellowtailGurnard = '/item/yellowtail_gurnard',
	BigeyeGurnard = '/item/bigeye_gurnard',
	BlackfinGurnard = '/item/blackfin_gurnard',
	ShinyGurnard = '/item/shiny_gurnard',
	TorpedoGurnard = '/item/torpedo_gurnard',
	GrandGurnard = '/item/grand_gurnard',

	SandyPufferfish = '/item/sandy_pufferfish',
	LonelyPufferfish = '/item/lonely_pufferfish',
	LemonPufferfish = '/item/lemon_pufferfish',
	FigureEightPufferfish = '/item/figure_eight_pufferfish',
	RubberPufferfish = '/item/rubber_pufferfish',
	MerryOldPufferfish = '/item/merry_old_pufferfish',
	HightidePufferfish = '/item/hightide_pufferfish',
	UnicornPufferfish = '/item/unicorn_pufferfish',

	CommonRay = '/item/common_ray',
	DimRay = '/item/dim_ray',
	SoldierRay = '/item/soldier_ray',
	NimbleRay = '/item/nimble_ray',
	TigerRay = '/item/tiger_ray',
	BroadRay = '/item/broad_ray',
	JadeRay = '/item/jade_ray',
	PrimeRay = '/item/prime_ray',

	// Passive Fish
	LeatheryBream = '/item/leathery_bream',
	BlackBream = '/item/black_bream',
	SurfBream = '/item/surf_bream',
	GracefulBream = '/item/graceful_bream',
	CreamBream = '/item/cream_bream',
	GiltHeadedBream = '/item/gilt_headed_bream',
	BrilliantBream = '/item/brilliant_bream',

	CommonDab = '/item/common_dab',
	SmallDab = '/item/small_dab',
	DancingDab = '/item/dancing_dab',
	SummerDab = '/item/summer_dab',
	SmoothDab = '/item/smooth_dab',
	ScreamingAbDab = '/item/screaming_ab_dab',
	SpottedDab = '/item/spotted_dab',
	MightyDab = '/item/mighty_dab',

	RidgedHerring = '/item/ridged_herring',
	GrayHerring = '/item/gray_herring',
	RedHerring = '/item/red_herring',
	OchreHerring = '/item/ochre_herring',
	WishfulHerring = '/item/wishful_herring',
	HopeHerring = '/item/hope_herring',
	ShimmeringHerring = '/item/shimmering_herring',

	SpottedMackibut = '/item/spotted_mackibut',
	WhitespotMackibut = '/item/whitespot_mackibut',
	BlueJackMackibut = '/item/blue_jack_mackibut',
	StreakedMackibut = '/item/streaked_mackibut',
	HorseMackibut = '/item/horse_mackibut',
	ChubMackibut = '/item/chub_mackibut',
	BlueMackibut = '/item/blue_mackibut',
	WahooMackibut = '/item/wahoo_mackibut',
	EtwayMackibut = '/item/etway_mackibut',
	KingMackibut = '/item/king_mackibut',

	IdleSturlet = '/item/idle_sturlet',
	FlatheadSturlet = '/item/flathead_sturlet',
	StripedSturlet = '/item/striped_sturlet',
	ThickLippedSturlet = '/item/thick_lipped_sturlet',
	WanderingSturlet = '/item/wandering_sturlet',
	SilverSturlet = '/item/silver_sturlet',
	WesternSturlet = '/item/western_sturlet',
	BlondSturlet = '/item/blond_sturlet',
	BulletSturlet = '/item/bullet_sturlet',
	MightySturlet = '/item/mighty_sturlet',

	BallanWraddock = '/item/ballan_wraddock',
	GoldsinnyWraddock = '/item/goldsinny_wraddock',
	CuckooWraddock = '/item/cuckoo_wraddock',
	CleanerWraddock = '/item/cleaner_wraddock',
	OrnateWraddock = '/item/ornate_wraddock',
	SixLineWraddock = '/item/six_line_wraddock',
	CorkwingWraddock = '/item/corkwing_wraddock',
	MegaWraddock = '/item/mega_wraddock',

	// Venture Fish
	OrangeLobster = '/item/orange_lobster',
	StripedLobster = '/item/striped_lobster',
	GhostLobster = '/item/ghost_lobster',
	CunningLobster = '/item/cunning_lobster',

	BeachOyster = '/item/beach_oyster',
	SignalOyster = '/item/signal_oyster',
	SpeckledOyster = '/item/speckled_oyster',
	RustyOyster = '/item/rusty_oyster',

	/** Forageer **/
	// Active Foragees
	MauveBellplant = '/item/mauve_bellplant',
	CrimsonBellplant = '/item/crimson_bellplant',
	StarshineBellplant = '/item/starshine_bellplant',

	GreenHogberries = '/item/green_hogberries',
	PurpleHogberries = '/item/purple_hogberries',
	RedHogberries = '/item/red_hogberries',

	BrownKelp = '/item/brown_kelp',
	GreenKelp = '/item/green_kelp',
	SilverKelp = '/item/silver_kelp',

	CommonLimpet = '/item/common_limpet',
	TigerLimpet = '/item/tiger_limpet',
	IrongripLimpet = '/item/irongrip_limpet',

	HugeMonumentPiece = '/item/huge_monument_piece',
	HeftyMonumentPiece = '/item/hefty_monument_piece',
	SubstantialMonumentPiece = '/item/substantial_monument_piece',
	ChunkyMonumentPiece = '/item/chunky_monument_piece',
	LargeMonumentPiece = '/item/large_monument_piece',
	BigMonumentPiece = '/item/big_monument_piece',
	MediumMonumentPiece = '/item/medium_monument_piece',
	AverageMonumentPiece = '/item/average_monument_piece',
	FairMonumentPiece = '/item/fair_monument_piece',
	MiddlingMonumentPiece = '/item/middling_monument_piece',
	SmallMonumentPiece = '/item/small_monument_piece',
	WeenyMonumentPiece = '/item/weeny_monument_piece',
	TeenyMonumentPiece = '/item/teeny_monument_piece',
	MinuteMonumentPiece = '/item/minute_monument_piece',
	MinisculeMonumentPiece = '/item/miniscule_monument_piece',

	WhiteNettle = '/item/white_nettle',
	BloodNettle = '/item/blood_nettle',

	WhitePeriwinkle = '/item/white_periwinkle',
	BluePeriwinkle = '/item/blue_periwinkle',
	StripedPeriwinkle = '/item/striped_periwinkle',

	TangledPondWeed = '/item/tangled_pond_weed',
	ReachingPondWeed = '/item/reaching_pond_weed',
	GreenveilPondWeed = '/item/greenveil_pond_weed',

	PiperPotato = '/item/piper_potato',
	KingPhelwanPotato = '/item/king_phelwan_potato',
	CalystraPotato = '/item/calystra_potato',
	ColawanPotato = '/item/colawan_potato',
	BitterbidePotato = '/item/bitterbide_potato',
	GreengrailPotato = '/item/greengrail_potato',
	GalimeerPotato = '/item/galimeer_potato',

	HornShell = '/item/horn_shell',
	BowlShell = '/item/bowl_shell',
	CrownShell = '/item/crown_shell',

	WrinkledStarfish = '/item/wrinkled_starfish',
	ClingyStarfish = '/item/clingy_starfish',
	BeadedStarfish = '/item/beaded_starfish',

	CreamyWallplant = '/item/creamy_wallplant',
	VibrantWallplant = '/item/vibrant_wallplant',
	ScarletWallplant = '/item/scarlet_wallplant',

	WhiteWaterLily = '/item/white_water_lily',
	CopperWaterLily = '/item/copper_water_lily',
	BroadWaterLily = '/item/broad_water_lily',

	BladderWrack = '/item/bladder_wrack',
	SpiralWrack = '/item/spiral_wrack',

	// Passive Foragees
	BeadletAnemone = '/item/beadlet_anemone',
	DahliaAnemone = '/item/dahlia_anemone',
	SnakelocksAnemone = '/item/snakelocks_anemone',
	ElegantAnemone = '/item/elegant_anemone',
	StrawberryAnemone = '/item/strawberry_anemone',
	RedandBlackFeather = '/item/redand_black_feather',
	WhiteFluffyFeather = '/item/white_fluffy_feather',
	ShimmeringFeather = '/item/shimmering_feather',
	GrayLouse = '/item/gray_louse',
	ReclusiveLouse = '/item/reclusive_louse',
	ShadowLouse = '/item/shadow_louse',
	BlotchyMaggots = '/item/blotchy_maggots',
	PastyMaggots = '/item/pasty_maggots',
	IckyMaggots = '/item/icky_maggots',
	RosyMaggots = '/item/rosy_maggots',
	WrithingMaggots = '/item/writhing_maggots',
	BrownMothWing = '/item/brown_moth_wing',
	LacyMothWing = '/item/lacy_moth_wing',
	EyedMothWing = '/item/eyed_moth_wing',
	RustyScrapMetal = '/item/rusty_scrap_metal',
	TarnishedScrapMetal = '/item/tarnished_scrap_metal',
	TwistedScrapMetal = '/item/twisted_scrap_metal',
	MiscellaneousScrapMetal = '/item/miscellaneous_scrap_metal',
	InterestingScrapMetal = '/item/interesting_scrap_metal',
	SubstantialScrapMetal = '/item/substantial_scrap_metal',
	SplendidScrapMetal = '/item/splendid_scrap_metal',
	ValuableScrapMetal = '/item/valuable_scrap_metal',
	WartySeaPotato = '/item/warty_sea_potato',
	BlueSeaPotato = '/item/blue_sea_potato',
	SleekSeaPotato = '/item/sleek_sea_potato',
	SlippySeaSlug = '/item/slippy_sea_slug',
	GunkySeaSlug = '/item/gunky_sea_slug',
	JuicySeaSlug = '/item/juicy_sea_slug',
	BlackSeaSlug = '/item/black_sea_slug',
	BrownSeaSlug = '/item/brown_sea_slug',
	SoftShimmerbean = '/item/soft_shimmerbean',
	GlowShimmerbean = '/item/glow_shimmerbean',
	DazzleShimmerbean = '/item/dazzle_shimmerbean',
	BristleSpinseed = '/item/bristle_spinseed',
	WingSpinseed = '/item/wing_spinseed',
	WhirlSpinseed = '/item/whirl_spinseed',
	DitchSprey = '/item/ditch_sprey',
	GravelSprey = '/item/gravel_sprey',
	BalkSprey = '/item/balk_sprey',
	SentinelSprey = '/item/sentinel_sprey',
	DukeSprey = '/item/duke_sprey',

	/** Woodcutter **/
	// Logs
	CoarseAshLog = '/item/coarse_ash_log',
	RuggedAshLog = '/item/rugged_ash_log',
	AverageAshLog = '/item/average_ash_log',
	FineAshLog = '/item/fine_ash_log',
	SturdyAshLog = '/item/sturdy_ash_log',
	PerfectAshLog = '/item/perfect_ash_log',

	CoarseHickoryLog = '/item/coarse_hickory_log',
	RuggedHickoryLog = '/item/rugged_hickory_log',
	AverageHickoryLog = '/item/average_hickory_log',
	FineHickoryLog = '/item/fine_hickory_log',
	SturdyHickoryLog = '/item/sturdy_hickory_log',
	PerfectHickoryLog = '/item/perfect_hickory_log',

	CoarseJuniperLog = '/item/coarse_juniper_log',
	RuggedJuniperLog = '/item/rugged_juniper_log',
	AverageJuniperLog = '/item/average_juniper_log',
	FineJuniperLog = '/item/fine_juniper_log',
	SturdyJuniperLog = '/item/sturdy_juniper_log',
	PerfectJuniperLog = '/item/perfect_juniper_log',

	CoarseOakLog = '/item/coarse_oak_log',
	RuggedOakLog = '/item/rugged_oak_log',
	AverageOakLog = '/item/average_oak_log',
	FineOakLog = '/item/fine_oak_log',
	SturdyOakLog = '/item/sturdy_oak_log',
	PerfectOakLog = '/item/perfect_oak_log',

	CoarsePineLog = '/item/coarse_pine_log',
	RuggedPineLog = '/item/rugged_pine_log',
	AveragePineLog = '/item/average_pine_log',
	FinePineLog = '/item/fine_pine_log',
	SturdyPineLog = '/item/sturdy_pine_log',
	PerfectPineLog = '/item/perfect_pine_log',

	CoarsePoplarLog = '/item/coarse_poplar_log',
	RuggedPoplarLog = '/item/rugged_poplar_log',
	AveragePoplarLog = '/item/average_poplar_log',
	FinePoplarLog = '/item/fine_poplar_log',
	SturdyPoplarLog = '/item/sturdy_poplar_log',
	PerfectPoplarLog = '/item/perfect_poplar_log',

	CoarseSuaveLog = '/item/coarse_suave_log',
	RuggedSuaveLog = '/item/rugged_suave_log',
	AverageSuaveLog = '/item/average_suave_log',
	FineSuaveLog = '/item/fine_suave_log',
	SturdySuaveLog = '/item/sturdy_suave_log',
	PerfectSuaveLog = '/item/perfect_suave_log',

	CoarseYewLog = '/item/coarse_yew_log',
	RuggedYewLog = '/item/rugged_yew_log',
	AverageYewLog = '/item/average_yew_log',
	FineYewLog = '/item/fine_yew_log',
	SturdyYewLog = '/item/sturdy_yew_log',
	PerfectYewLog = '/item/perfect_yew_log',

	/** Carpenter **/
	// Planks & Poles
	CoarseAshPlank = '/item/coarse_ash_plank',
	RuggedAshPlank = '/item/rugged_ash_plank',
	AverageAshPlank = '/item/average_ash_plank',
	FineAshPlank = '/item/fine_ash_plank',
	SturdyAshPlank = '/item/sturdy_ash_plank',
	PerfectAshPlank = '/item/perfect_ash_plank',

	CoarseHickoryPole = '/item/coarse_hickory_pole',
	RuggedHickoryPole = '/item/rugged_hickory_pole',
	AverageHickoryPole = '/item/average_hickory_pole',
	FineHickoryPole = '/item/fine_hickory_pole',
	SturdyHickoryPole = '/item/sturdy_hickory_pole',
	PerfectHickoryPole = '/item/perfect_hickory_pole',

	CoarseJuniperStave = '/item/coarse_juniper_stave',
	RuggedJuniperStave = '/item/rugged_juniper_stave',
	AverageJuniperStave = '/item/average_juniper_stave',
	FineJuniperStave = '/item/fine_juniper_stave',
	SturdyJuniperStave = '/item/sturdy_juniper_stave',
	PerfectJuniperStave = '/item/perfect_juniper_stave',

	CoarseOakPole = '/item/coarse_oak_pole',
	RuggedOakPole = '/item/rugged_oak_pole',
	AverageOakPole = '/item/average_oak_pole',
	FineOakPole = '/item/fine_oak_pole',
	SturdyOakPole = '/item/sturdy_oak_pole',
	PerfectOakPole = '/item/perfect_oak_pole',

	CoarsePinePole = '/item/coarse_pine_pole',
	RuggedPinePole = '/item/rugged_pine_pole',
	AveragePinePole = '/item/average_pine_pole',
	FinePinePole = '/item/fine_pine_pole',
	SturdyPinePole = '/item/sturdy_pine_pole',
	PerfectPinePole = '/item/perfect_pine_pole',

	CoarsePoplarPole = '/item/coarse_poplar_pole',
	RuggedPoplarPole = '/item/rugged_poplar_pole',
	AveragePoplarPole = '/item/average_poplar_pole',
	FinePoplarPole = '/item/fine_poplar_pole',
	SturdyPoplarPole = '/item/sturdy_poplar_pole',
	PerfectPoplarPole = '/item/perfect_poplar_pole',

	CoarseSuavePole = '/item/coarse_suave_pole',
	RuggedSuavePole = '/item/rugged_suave_pole',
	AverageSuavePole = '/item/average_suave_pole',
	FineSuavePole = '/item/fine_suave_pole',
	SturdySuavePole = '/item/sturdy_suave_pole',
	PerfectSuavePole = '/item/perfect_suave_pole',

	CoarseYewPole = '/item/coarse_yew_pole',
	RuggedYewPole = '/item/rugged_yew_pole',
	AverageYewPole = '/item/average_yew_pole',
	FineYewPole = '/item/fine_yew_pole',
	SturdyYewPole = '/item/sturdy_yew_pole',
	PerfectYewPole = '/item/perfect_yew_pole',

	/** Leatherworking **/

	// Hides
	BasicBisonHide = '/item/basic_bison_hide',
	ModerateBisonHide = '/item/moderate_bison_hide',
	FineBisonHide = '/item/fine_bison_hide',
	StrongBisonHide = '/item/strong_bison_hide',
	SuperiorBisonHide = '/item/superior_bison_hide',
	PerfectBisonHide = '/item/perfect_bison_hide',

	BasicBlackCowHide = '/item/basic_black_cow_hide',
	ModerateBlackCowHide = '/item/moderate_black_cow_hide',
	FineBlackCowHide = '/item/fine_black_cow_hide',
	StrongBlackCowHide = '/item/strong_black_cow_hide',
	SuperiorBlackCowHide = '/item/superior_black_cow_hide',
	PerfectBlackCowHide = '/item/perfect_black_cow_hide',

	BasicBrownCowHide = '/item/basic_brown_cow_hide',
	ModerateBrownCowHide = '/item/moderate_brown_cow_hide',
	FineBrownCowHide = '/item/fine_brown_cow_hide',
	StrongBrownCowHide = '/item/strong_brown_cow_hide',
	SuperiorBrownCowHide = '/item/superior_brown_cow_hide',
	PerfectBrownCowHide = '/item/perfect_brown_cow_hide',

	BasicBuffaloHide = '/item/basic_buffalo_hide',
	ModerateBuffaloHide = '/item/moderate_buffalo_hide',
	FineBuffaloHide = '/item/fine_buffalo_hide',
	StrongBuffaloHide = '/item/strong_buffalo_hide',
	SuperiorBuffaloHide = '/item/superior_buffalo_hide',
	PerfectBuffaloHide = '/item/perfect_buffalo_hide',

	BasicDeerHide = '/item/basic_deer_hide',
	ModerateDeerHide = '/item/moderate_deer_hide',
	FineDeerHide = '/item/fine_deer_hide',
	StrongDeerHide = '/item/strong_deer_hide',
	SuperiorDeerHide = '/item/superior_deer_hide',
	PerfectDeerHide = '/item/perfect_deer_hide',

	BasicHalebeastHide = '/item/basic_halebeast_hide',
	ModerateHalebeastHide = '/item/moderate_halebeast_hide',
	FineHalebeastHide = '/item/fine_halebeast_hide',
	StrongHalebeastHide = '/item/strong_halebeast_hide',
	SuperiorHalebeastHide = '/item/superior_halebeast_hide',
	PerfectHalebeastHide = '/item/perfect_halebeast_hide',

	BasicSheepHide = '/item/basic_sheep_hide',
	ModerateSheepHide = '/item/moderate_sheep_hide',
	FineSheepHide = '/item/fine_sheep_hide',
	StrongSheepHide = '/item/strong_sheep_hide',
	SuperiorSheepHide = '/item/superior_sheep_hide',
	PerfectSheepHide = '/item/perfect_sheep_hide',

	BasicWhiteCowHide = '/item/basic_white_cow_hide',
	ModerateWhiteCowHide = '/item/moderate_white_cow_hide',
	FineWhiteCowHide = '/item/fine_white_cow_hide',
	StrongWhiteCowHide = '/item/strong_white_cow_hide',
	SuperiorWhiteCowHide = '/item/superior_white_cow_hide',
	PerfectWhiteCowHide = '/item/perfect_white_cow_hide',

	// Leathers
	BasicBisonLeather = '/item/basic_bison_leather',
	ModerateBisonLeather = '/item/moderate_bison_leather',
	FineBisonLeather = '/item/fine_bison_leather',
	StrongBisonLeather = '/item/strong_bison_leather',
	SuperiorBisonLeather = '/item/superior_bison_leather',
	PerfectBisonLeather = '/item/perfect_bison_leather',

	BasicBlackCowLeather = '/item/basic_black_cow_leather',
	ModerateBlackCowLeather = '/item/moderate_black_cow_leather',
	FineBlackCowLeather = '/item/fine_black_cow_leather',
	StrongBlackCowLeather = '/item/strong_black_cow_leather',
	SuperiorBlackCowLeather = '/item/superior_black_cow_leather',
	PerfectBlackCowLeather = '/item/perfect_black_cow_leather',

	BasicBrownCowLeather = '/item/basic_brown_cow_leather',
	ModerateBrownCowLeather = '/item/moderate_brown_cow_leather',
	FineBrownCowLeather = '/item/fine_brown_cow_leather',
	StrongBrownCowLeather = '/item/strong_brown_cow_leather',
	SuperiorBrownCowLeather = '/item/superior_brown_cow_leather',
	PerfectBrownCowLeather = '/item/perfect_brown_cow_leather',

	BasicBuffaloLeather = '/item/basic_buffalo_leather',
	ModerateBuffaloLeather = '/item/moderate_buffalo_leather',
	FineBuffaloLeather = '/item/fine_buffalo_leather',
	StrongBuffaloLeather = '/item/strong_buffalo_leather',
	SuperiorBuffaloLeather = '/item/superior_buffalo_leather',
	PerfectBuffaloLeather = '/item/perfect_buffalo_leather',

	BasicDeerLeather = '/item/basic_deer_leather',
	ModerateDeerLeather = '/item/moderate_deer_leather',
	FineDeerLeather = '/item/fine_deer_leather',
	StrongDeerLeather = '/item/strong_deer_leather',
	SuperiorDeerLeather = '/item/superior_deer_leather',
	PerfectDeerLeather = '/item/perfect_deer_leather',

	BasicHalebeastLeather = '/item/basic_halebeast_leather',
	ModerateHalebeastLeather = '/item/moderate_halebeast_leather',
	FineHalebeastLeather = '/item/fine_halebeast_leather',
	StrongHalebeastLeather = '/item/strong_halebeast_leather',
	SuperiorHalebeastLeather = '/item/superior_halebeast_leather',
	PerfectHalebeastLeather = '/item/perfect_halebeast_leather',

	BasicSheepLeather = '/item/basic_sheep_leather',
	ModerateSheepLeather = '/item/moderate_sheep_leather',
	FineSheepLeather = '/item/fine_sheep_leather',
	StrongSheepLeather = '/item/strong_sheep_leather',
	SuperiorSheepLeather = '/item/superior_sheep_leather',
	PerfectSheepLeather = '/item/perfect_sheep_leather',

	BasicWhiteCowLeather = '/item/basic_white_cow_leather',
	ModerateWhiteCowLeather = '/item/moderate_white_cow_leather',
	FineWhiteCowLeather = '/item/fine_white_cow_leather',
	StrongWhiteCowLeather = '/item/strong_white_cow_leather',
	SuperiorWhiteCowLeather = '/item/superior_white_cow_leather',
	PerfectWhiteCowLeather = '/item/perfect_white_cow_leather',

	/** Capes **/
	JourneymanGuardCape = '/item/journeyman_guard_cape',
	AdeptGuardCape = '/item/adept_guard_cape',
	ExpertGuardCape = '/item/expert_guard_cape',
	UltimateGuardCape = '/item/ultimate_guard_cape',
	JourneymanChefCape = '/item/journeyman_chef_cape',
	AdeptChefCape = '/item/adept_chef_cape',
	ExpertChefCape = '/item/expert_chef_cape',
	UltimateChefCape = '/item/ultimate_chef_cape',
	JourneymanFisherCape = '/item/journeyman_fisher_cape',
	AdeptFisherCape = '/item/adept_fisher_cape',
	ExpertFisherCape = '/item/expert_fisher_cape',
	UltimateFisherCape = '/item/ultimate_fisher_cape',
	JourneymanGathererCape = '/item/journeyman_gatherer_cape',
	AdeptGathererCape = '/item/adept_gatherer_cape',
	ExpertGathererCape = '/item/expert_gatherer_cape',
	UltimateGathererCape = '/item/ultimate_gatherer_cape',
	JourneymanAlchemistCape = '/item/journeyman_alchemist_cape',
	AdeptAlchemistCape = '/item/adept_alchemist_cape',
	ExpertAlchemistCape = '/item/expert_alchemist_cape',
	UltimateAlchemistCape = '/item/ultimate_alchemist_cape',
	JourneymanScoutCape = '/item/journeyman_scout_cape',
	AdeptScoutCape = '/item/adept_scout_cape',
	ExpertScoutCape = '/item/expert_scout_cape',
	UltimateScoutCape = '/item/ultimate_scout_cape',
	JourneymanForagerCape = '/item/journeyman_forager_cape',
	AdeptForagerCape = '/item/adept_forager_cape',
	ExpertForagerCape = '/item/expert_forager_cape',
	UltimateForagerCape = '/item/ultimate_forager_cape',
	JourneymanWoodcutterCape = '/item/journeyman_woodcutter_cape',
	AdeptWoodcutterCape = '/item/adept_woodcutter_cape',
	ExpertWoodcutterCape = '/item/expert_woodcutter_cape',
	UltimateWoodcutterCape = '/item/ultimate_woodcutter_cape',
	JourneymanCarpenterCape = '/item/journeyman_carpenter_cape',
	AdeptCarpenterCape = '/item/adept_carpenter_cape',
	ExpertCarpenterCape = '/item/expert_carpenter_cape',
	UltimateCarpenterCape = '/item/ultimate_carpenter_cape',
	JourneymanMinefighterCape = '/item/journeyman_minefighter_cape',
	AdeptMinefighterCape = '/item/adept_minefighter_cape',
	ExpertMinefighterCape = '/item/expert_minefighter_cape',
	UltimateMinefighterCape = '/item/ultimate_minefighter_cape',
	JourneymanBonewrightCape = '/item/journeyman_bonewright_cape',
	AdeptBonewrightCape = '/item/adept_bonewright_cape',
	ExpertBonewrightCape = '/item/expert_bonewright_cape',
	UltimateBonewrightCape = '/item/ultimate_bonewright_cape',
	JourneymanMinerCape = '/item/journeyman_miner_cape',
	AdeptMinerCape = '/item/adept_miner_cape',
	ExpertMinerCape = '/item/expert_miner_cape',
	UltimateMinerCape = '/item/ultimate_miner_cape',
	JourneymanBlacksmithCape = '/item/journeyman_blacksmith_cape',
	AdeptBlacksmithCape = '/item/adept_blacksmith_cape',
	ExpertBlacksmithCape = '/item/expert_blacksmith_cape',
	UltimateBlacksmithCape = '/item/ultimate_blacksmith_cape',
	JourneymanStonemasonCape = '/item/journeyman_stonemason_cape',
	AdeptStonemasonCape = '/item/adept_stonemason_cape',
	ExpertStonemasonCape = '/item/expert_stonemason_cape',
	UltimateStonemasonCape = '/item/ultimate_stonemason_cape',
	JourneymanWatchpersonCape = '/item/journeyman_watchperson_cape',
	AdeptWatchpersonCape = '/item/adept_watchperson_cape',
	ExpertWatchpersonCape = '/item/expert_watchperson_cape',
	UltimateWatchpersonCape = '/item/ultimate_watchperson_cape',
	JourneymanDetectiveCape = '/item/journeyman_detective_cape',
	AdeptDetectiveCape = '/item/adept_detective_cape',
	ExpertDetectiveCape = '/item/expert_detective_cape',
	UltimateDetectiveCape = '/item/ultimate_detective_cape',
	JourneymanLeatherworkerCape = '/item/journeyman_leatherworker_cape',
	AdeptLeatherworkerCape = '/item/adept_leatherworker_cape',
	ExpertLeatherworkerCape = '/item/expert_leatherworker_cape',
	UltimateLeatherworkerCape = '/item/ultimate_leatherworker_cape',
	JourneymanMerchantCape = '/item/journeyman_merchant_cape',
	AdeptMerchantCape = '/item/adept_merchant_cape',
	ExpertMerchantCape = '/item/expert_merchant_cape',
	UltimateMerchantCape = '/item/ultimate_merchant_cape',
	JourneymanArmorerCape = '/item/journeyman_armorer_cape',
	AdeptArmorerCape = '/item/adept_armorer_cape',
	ExpertArmorerCape = '/item/expert_armorer_cape',
	UltimateArmorerCape = '/item/ultimate_armorer_cape',
}
