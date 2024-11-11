export const Component = {
    RestApplication: Symbol.for('RestApplication'),
    Logger: Symbol.for('Logger'),
    Config: Symbol.for('Config'),
    DatabaseClient: Symbol.for('DatabaseClient'),
    UserService: Symbol.for('UserService'),
    UserModel: Symbol.for('UserModel'),
    OfferService: Symbol.for('OfferService'),
    OfferModel: Symbol.for('OfferModel'),
    CommentService: Symbol.for('CommentService'),
    CommentModel: Symbol.for('CommentModel'),
    FavoriteService: Symbol.for('FavoriteService'),
    FavoriteModel: Symbol.for('FavoriteModel'),
    CLIApplication: Symbol.for('CLIApplication'),
    VersionCommand: Symbol.for('VersionCommand'),
    HelpCommand: Symbol.for('HelpCommand'),
    ImportCommand: Symbol.for('ImportCommand'),
    GenerateCommand: Symbol.for('GenerateCommand'),
} as const;