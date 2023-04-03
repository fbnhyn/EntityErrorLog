export abstract class EntityExtractor {
    public static Params(url: string): Entity | null {
        const params = new URLSearchParams(url);
        if (!params.has("etn") || !params.has("id")) return null;
        const p : Entity = {
            entityId: params.get("id") as string,
            entityType: params.get("etn") as string
        }
        return p;
    }
}