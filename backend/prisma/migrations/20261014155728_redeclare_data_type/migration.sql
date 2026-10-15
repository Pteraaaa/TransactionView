-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productID" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 0,
    "transactionDate" DATETIME NOT NULL,
    "createBy" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Transaction" ("amount", "createAt", "createBy", "customerName", "id", "productID", "productName", "status", "transactionDate") SELECT "amount", "createAt", "createBy", "customerName", "id", "productID", "productName", "status", "transactionDate" FROM "Transaction";
DROP TABLE "Transaction";
ALTER TABLE "new_Transaction" RENAME TO "Transaction";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
