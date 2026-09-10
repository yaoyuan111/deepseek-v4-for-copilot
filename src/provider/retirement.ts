const LEGACY_MODEL_IDS = new Set<string>();

interface ModelRetirementNotice {
	code: 'model_pending_deprecation' | 'model_deprecated';
	message: string;
	showPricing: boolean;
}

/** Presentation only: never changes model selection or request conversion. */
export function getModelRetirementNotice(
	modelId: string,
	_usesOfficialModel: boolean,
	_now: Date,
): ModelRetirementNotice | undefined {
	if (!LEGACY_MODEL_IDS.has(modelId)) {
		return undefined;
	}

	return undefined;
}
