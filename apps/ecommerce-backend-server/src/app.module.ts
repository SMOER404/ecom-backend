import { Module } from "@nestjs/common";
import { ReviewModule } from "./review/review.module";
import { CartItemModule } from "./cartItem/cartItem.module";
import { CartModule } from "./cart/cart.module";
import { OrderItemModule } from "./orderItem/orderItem.module";
import { PaymentModule } from "./payment/payment.module";
import { AuditLogModule } from "./auditLog/auditLog.module";
import { ShippingMethodModule } from "./shippingMethod/shippingMethod.module";
import { NotificationModule } from "./notification/notification.module";
import { SupportTicketModule } from "./supportTicket/supportTicket.module";
import { WebhookModule } from "./webhook/webhook.module";
import { CouponModule } from "./coupon/coupon.module";
import { ReturnRequestModule } from "./returnRequest/returnRequest.module";
import { WishlistModule } from "./wishlist/wishlist.module";
import { OrderModule } from "./order/order.module";
import { FileUploadModule } from "./fileUpload/fileUpload.module";
import { BrandModule } from "./brand/brand.module";
import { CategoryModule } from "./category/category.module";
import { ProductModule } from "./product/product.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    ReviewModule,
    CartItemModule,
    CartModule,
    OrderItemModule,
    PaymentModule,
    AuditLogModule,
    ShippingMethodModule,
    NotificationModule,
    SupportTicketModule,
    WebhookModule,
    CouponModule,
    ReturnRequestModule,
    WishlistModule,
    OrderModule,
    FileUploadModule,
    BrandModule,
    CategoryModule,
    ProductModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
