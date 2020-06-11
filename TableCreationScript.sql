USE [EmployeeActivities]
GO

/****** Object:  Table [dbo].[Activities]    Script Date: 6/11/2020 12:14:36 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Activities](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](250) NOT NULL,
	[LastName] [varchar](250) NOT NULL,
	[EmailAddress] [varchar](250) NOT NULL,
	[Activity] [varchar](250) NOT NULL,
	[Comments] [nvarchar](250) NULL
) ON [PRIMARY]
GO


